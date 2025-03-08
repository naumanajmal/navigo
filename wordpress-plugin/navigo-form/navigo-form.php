<?php
/**
 * Plugin Name: Navigo Form Handler
 * Description: Handles form submissions from Navigo React website and provides shortcode for form display
 * Version: 1.0
 * Author: Your Name
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Create database table on plugin activation
function navigo_form_activate() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'navigo_form_submissions';
    
    $charset_collate = $wpdb->get_charset_collate();

    $sql = "CREATE TABLE IF NOT EXISTS $table_name (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        submission_date datetime DEFAULT CURRENT_TIMESTAMP,
        name varchar(100),
        email varchar(100),
        phone varchar(50),
        mortgage_amount decimal(15,2),
        property_type varchar(50),
        residency_status varchar(50),
        age int,
        employment_type varchar(50),
        property_value decimal(15,2),
        purchase_timeline varchar(50),
        PRIMARY KEY  (id)
    ) $charset_collate;";

    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta($sql);

    // Add plugin options
    add_option('navigo_form_notification_email', get_option('admin_email'));
}
register_activation_hook(__FILE__, 'navigo_form_activate');

// Configure PHPMailer to use SMTP
function navigo_form_phpmailer_config($phpmailer) {
    $phpmailer->isSMTP();
    $phpmailer->Host = 'mail.navigo.ae'; 
    $phpmailer->SMTPAuth = true;
    $phpmailer->Port = 465; 
    $phpmailer->Username = 'no-reply@navigo.ae';
    $phpmailer->Password = 'Navigo@00';
    $phpmailer->SMTPSecure = 'ssl'; 
    $phpmailer->From = 'no-reply@navigo.ae';
    $phpmailer->FromName = 'Navigo Form Submission';
    
    // Enable debug output
    $phpmailer->SMTPDebug = 2;
    $phpmailer->Debugoutput = 'error_log';
}
add_action('phpmailer_init', 'navigo_form_phpmailer_config');

// Add error logging for emails
function navigo_form_log_mailer_errors($wp_error) {
    $fn = ABSPATH . '/wp-content/debug-email.log';
    $fp = fopen($fn, 'a');
    fputs($fp, "Mailer Error: " . $wp_error->get_error_message() . "\n");
    fclose($fp);
}
add_action('wp_mail_failed', 'navigo_form_log_mailer_errors', 10, 1);

// Add admin menu
function navigo_form_admin_menu() {
    add_menu_page(
        'Navigo Form Settings',
        'Navigo Form',
        'manage_options',
        'navigo-form-settings',
        'navigo_form_settings_page',
        'dashicons-feedback'
    );

    add_submenu_page(
        'navigo-form-settings',
        'View Submissions',
        'View Submissions',
        'manage_options',
        'navigo-form-submissions',
        'navigo_form_submissions_page'
    );
}
add_action('admin_menu', 'navigo_form_admin_menu');

// Admin settings page
function navigo_form_settings_page() {
    if (isset($_POST['navigo_form_notification_email'])) {
        update_option('navigo_form_notification_email', sanitize_email($_POST['navigo_form_notification_email']));
        echo '<div class="notice notice-success"><p>Settings saved successfully!</p></div>';
    }
    
    $notification_email = get_option('navigo_form_notification_email');
    ?>
    <div class="wrap">
        <h2>Navigo Form Settings</h2>
        <form method="post" action="">
            <table class="form-table">
                <tr>
                    <th scope="row">Notification Email</th>
                    <td>
                        <input type="email" name="navigo_form_notification_email" value="<?php echo esc_attr($notification_email); ?>" class="regular-text">
                        <p class="description">Email address where form submissions will be sent.</p>
                    </td>
                </tr>
            </table>
            <?php submit_button(); ?>
        </form>
    </div>
    <?php
}

// Handle form submission deletion
function handle_submission_deletion() {
    if (isset($_POST['action']) && $_POST['action'] === 'delete_submission' && isset($_POST['submission_id'])) {
        check_admin_referer('delete_submission_' . $_POST['submission_id']);
        
        global $wpdb;
        $table_name = $wpdb->prefix . 'navigo_form_submissions';
        
        $wpdb->delete(
            $table_name,
            array('id' => $_POST['submission_id']),
            array('%d')
        );
        
        wp_redirect(add_query_arg('deleted', 'true', wp_get_referer()));
        exit;
    }
}
add_action('admin_init', 'handle_submission_deletion');

// Submissions page
function navigo_form_submissions_page() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'navigo_form_submissions';

    // Handle view details
    if (isset($_GET['view']) && is_numeric($_GET['view'])) {
        $submission_id = intval($_GET['view']);
        $submission = $wpdb->get_row($wpdb->prepare(
            "SELECT * FROM $table_name WHERE id = %d",
            $submission_id
        ));

        if ($submission) {
            ?>
            <div class="wrap">
                <h1>Submission Details</h1>
                <a href="<?php echo admin_url('admin.php?page=navigo-form-submissions'); ?>" class="button">← Back to List</a>
                <div class="card" style="max-width: 800px; margin-top: 20px; padding: 20px;">
                    <table class="form-table">
                        <tr>
                            <th>Submission Date:</th>
                            <td><?php echo esc_html($submission->submission_date); ?></td>
                        </tr>
                        <tr>
                            <th>Name:</th>
                            <td><?php echo esc_html($submission->name); ?></td>
                        </tr>
                        <tr>
                            <th>Email:</th>
                            <td><?php echo esc_html($submission->email); ?></td>
                        </tr>
                        <tr>
                            <th>Phone:</th>
                            <td><?php echo esc_html($submission->phone); ?></td>
                        </tr>
                        <tr>
                            <th>Mortgage Amount:</th>
                            <td>AED <?php echo number_format($submission->mortgage_amount, 2); ?></td>
                        </tr>
                        <tr>
                            <th>Property Type:</th>
                            <td><?php echo esc_html($submission->property_type); ?></td>
                        </tr>
                        <tr>
                            <th>Residency Status:</th>
                            <td><?php echo esc_html($submission->residency_status); ?></td>
                        </tr>
                        <tr>
                            <th>Age:</th>
                            <td><?php echo esc_html($submission->age); ?></td>
                        </tr>
                        <tr>
                            <th>Employment Type:</th>
                            <td><?php echo esc_html($submission->employment_type); ?></td>
                        </tr>
                        <tr>
                            <th>Property Value:</th>
                            <td>AED <?php echo number_format($submission->property_value, 2); ?></td>
                        </tr>
                        <tr>
                            <th>Purchase Timeline:</th>
                            <td><?php echo esc_html($submission->purchase_timeline); ?></td>
                        </tr>
                    </table>
                    <div style="margin-top: 20px;">
                        <form method="post" style="display: inline;">
                            <?php wp_nonce_field('delete_submission_' . $submission->id); ?>
                            <input type="hidden" name="action" value="delete_submission">
                            <input type="hidden" name="submission_id" value="<?php echo esc_attr($submission->id); ?>">
                            <button type="submit" class="button button-link-delete" onclick="return confirm('Are you sure you want to delete this submission?');">
                                Delete Submission
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <?php
            return;
        }
    }

    // Display submissions list
    $page = isset($_GET['paged']) ? max(1, intval($_GET['paged'])) : 1;
    $items_per_page = 20;
    $offset = ($page - 1) * $items_per_page;

    $total_items = $wpdb->get_var("SELECT COUNT(*) FROM $table_name");
    $total_pages = ceil($total_items / $items_per_page);

    $submissions = $wpdb->get_results($wpdb->prepare(
        "SELECT * FROM $table_name ORDER BY submission_date DESC LIMIT %d OFFSET %d",
        $items_per_page,
        $offset
    ));

    ?>
    <div class="wrap">
        <h1>Form Submissions</h1>
        
        <?php if (isset($_GET['deleted']) && $_GET['deleted'] === 'true'): ?>
            <div class="notice notice-success is-dismissible">
                <p>Submission deleted successfully.</p>
            </div>
        <?php endif; ?>

        <table class="wp-list-table widefat fixed striped">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Mortgage Amount</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($submissions as $submission): ?>
                <tr>
                    <td><?php echo esc_html($submission->submission_date); ?></td>
                    <td><?php echo esc_html($submission->name); ?></td>
                    <td><?php echo esc_html($submission->email); ?></td>
                    <td><?php echo esc_html($submission->phone); ?></td>
                    <td>AED <?php echo number_format($submission->mortgage_amount, 2); ?></td>
                    <td>
                        <a href="<?php echo add_query_arg('view', $submission->id); ?>" class="button button-small">View</a>
                        <form method="post" style="display: inline;">
                            <?php wp_nonce_field('delete_submission_' . $submission->id); ?>
                            <input type="hidden" name="action" value="delete_submission">
                            <input type="hidden" name="submission_id" value="<?php echo esc_attr($submission->id); ?>">
                            <button type="submit" class="button button-small button-link-delete" onclick="return confirm('Are you sure you want to delete this submission?');">
                                Delete
                            </button>
                        </form>
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>

        <?php if ($total_pages > 1): ?>
        <div class="tablenav bottom">
            <div class="tablenav-pages">
                <span class="pagination-links">
                    <?php
                    echo paginate_links(array(
                        'base' => add_query_arg('paged', '%#%'),
                        'format' => '',
                        'prev_text' => __('&laquo;'),
                        'next_text' => __('&raquo;'),
                        'total' => $total_pages,
                        'current' => $page
                    ));
                    ?>
                </span>
            </div>
        </div>
        <?php endif; ?>
    </div>
    <?php
}

// Register REST API endpoint
function navigo_form_register_rest_route() {
    register_rest_route('navigo/v1', '/submit-form', array(
        'methods' => 'POST',
        'callback' => 'navigo_form_handle_submission',
        'permission_callback' => '__return_true'
    ));
}
add_action('rest_api_init', 'navigo_form_register_rest_route');

// Handle form submission
function navigo_form_handle_submission($request) {
    global $wpdb;
    $table_name = $wpdb->prefix . 'navigo_form_submissions';
    
    // Get parameters from request
    $params = $request->get_params();
    
    // Sanitize input data
    $data = array(
        'name' => sanitize_text_field($params['name']),
        'email' => sanitize_email($params['email']),
        'phone' => sanitize_text_field($params['phone']),
        'mortgage_amount' => floatval($params['mortgageAmount']),
        'property_type' => sanitize_text_field($params['propertyType']),
        'residency_status' => sanitize_text_field($params['residencyStatus']),
        'age' => intval($params['age']),
        'employment_type' => sanitize_text_field($params['employmentType']),
        'property_value' => floatval($params['propertyValue']),
        'purchase_timeline' => sanitize_text_field($params['purchaseTimeline'])
    );
    
    // Insert into database
    $result = $wpdb->insert($table_name, $data);
    
    if ($result === false) {
        error_log('Database insertion failed: ' . $wpdb->last_error);
        return new WP_Error('db_error', 'Error saving form submission', array('status' => 500));
    }
    
    // Send email notification to admin
    $admin_email = get_option('navigo_form_notification_email');
    $admin_subject = 'New Navigo Form Submission';
    
    $admin_message = "New form submission received:\n\n";
    $admin_message .= "Name: " . $data['name'] . "\n";
    $admin_message .= "Email: " . $data['email'] . "\n";
    $admin_message .= "Phone: " . $data['phone'] . "\n";
    $admin_message .= "Mortgage Amount: " . $data['mortgage_amount'] . "\n";
    $admin_message .= "Property Type: " . $data['property_type'] . "\n";
    $admin_message .= "Residency Status: " . $data['residency_status'] . "\n";
    $admin_message .= "Age: " . $data['age'] . "\n";
    $admin_message .= "Employment Type: " . $data['employment_type'] . "\n";
    $admin_message .= "Property Value: " . $data['property_value'] . "\n";
    $admin_message .= "Purchase Timeline: " . $data['purchase_timeline'] . "\n";

    $headers = array(
        'Content-Type: text/html; charset=UTF-8',
        'From: Navigo Form Submission <no-reply@navigo.ae>'
    );
    
    // Try sending admin email and log any errors
    $admin_mail_sent = wp_mail($admin_email, $admin_subject, $admin_message, $headers);
    if (!$admin_mail_sent) {
        error_log('Failed to send admin notification email to: ' . $admin_email);
    }
    
    // Send thank you email to user
    $user_subject = 'Thank You for Your Interest in Navigo';
    
    $user_message = '
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { text-align: center; margin-bottom: 30px; }
            .content { margin-bottom: 30px; }
            .footer { text-align: center; font-size: 12px; color: #666; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>Thank You for Choosing Navigo</h2>
            </div>
            <div class="content">
                <p>Dear ' . $data['name'] . ',</p>
                
                <p>Thank you for submitting your mortgage inquiry with Navigo. We appreciate your interest in our services.</p>
                
                <p>Our team has received your application and will review the details you\'ve provided:</p>
                <ul>
                    <li>Property Type: ' . ucfirst($data['property_type']) . '</li>
                    <li>Mortgage Amount: AED ' . number_format($data['mortgage_amount'], 2) . '</li>
                    <li>Timeline: ' . $data['purchase_timeline'] . '</li>
                </ul>
                
                <p>One of our mortgage specialists will contact you shortly to discuss your requirements in detail and guide you through the next steps.</p>
                
                <p>If you have any immediate questions, please don\'t hesitate to reach out to us.</p>
            </div>
            <div class="footer">
                <p>Best regards,<br>The Navigo Team</p>
                <p>This is an automated message, please do not reply to this email.</p>
            </div>
        </div>
    </body>
    </html>';
    
    // Try sending user email and log any errors
    $user_mail_sent = wp_mail($data['email'], $user_subject, $user_message, $headers);
    if (!$user_mail_sent) {
        error_log('Failed to send thank you email to: ' . $data['email']);
    }
    
    return new WP_REST_Response(
        array(
            'message' => 'Form submitted successfully',
            'admin_mail_sent' => $admin_mail_sent,
            'user_mail_sent' => $user_mail_sent
        ), 
        200
    );
}

// Add shortcode for displaying submissions in admin
function navigo_form_submissions_shortcode() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'navigo_form_submissions';
    
    $submissions = $wpdb->get_results("SELECT * FROM $table_name ORDER BY submission_date DESC");
    
    ob_start();
    ?>
    <div class="navigo-form-submissions">
        <table class="wp-list-table widefat fixed striped">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Mortgage Amount</th>
                    <th>Property Type</th>
                    <th>Residency Status</th>
                    <th>Age</th>
                    <th>Employment Type</th>
                    <th>Property Value</th>
                    <th>Purchase Timeline</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($submissions as $submission): ?>
                <tr>
                    <td><?php echo esc_html($submission->submission_date); ?></td>
                    <td><?php echo esc_html($submission->name); ?></td>
                    <td><?php echo esc_html($submission->email); ?></td>
                    <td><?php echo esc_html($submission->phone); ?></td>
                    <td><?php echo esc_html($submission->mortgage_amount); ?></td>
                    <td><?php echo esc_html($submission->property_type); ?></td>
                    <td><?php echo esc_html($submission->residency_status); ?></td>
                    <td><?php echo esc_html($submission->age); ?></td>
                    <td><?php echo esc_html($submission->employment_type); ?></td>
                    <td><?php echo esc_html($submission->property_value); ?></td>
                    <td><?php echo esc_html($submission->purchase_timeline); ?></td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
    <?php
    return ob_get_clean();
}
add_shortcode('navigo_form_submissions', 'navigo_form_submissions_shortcode');

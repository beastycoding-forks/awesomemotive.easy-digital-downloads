<?php
namespace EDD\Onboarding\Steps\PaymentMethods;

use EDD\Onboarding\Helpers;

function initialize() {
	return;
}

function save_handler() {
	exit;
}

function step_html() {
	// Filter Stripe connect nad disconnect URL.
	add_filter( 'edds_stripe_connect_url', function( $url ) {
		$return_url = add_query_arg(
			array(
				'post_type'       => 'download',
				'redirect_screen' => 'onboarding-wizard',
			),
			admin_url( 'edit.php' )
		);

		$stripe_connect_url = add_query_arg(
			array(
				'live_mode'         => 0,
				'state'             => str_pad( wp_rand( wp_rand(), PHP_INT_MAX ), 100, wp_rand(), STR_PAD_BOTH ),
				'customer_site_url' => urlencode( esc_url_raw( $return_url ) ),
			),
			'https://easydigitaldownloads.com/?edd_gateway_connect_init=stripe_connect'
		);

		// echo esc_url_raw( urlencode( esc_url_raw( $return_url ) ) );

		return $stripe_connect_url;
	}, 1, 1 );

	add_filter( 'edds_stripe_connect_disconnect_url', function( $url ) {
		$stripe_connect_disconnect_url = add_query_arg(
			array(
				'post_type'       => 'download',
				'redirect_screen' => 'onboarding-wizard',
				'edds-stripe-disconnect' => true,
			),
			admin_url( 'edit.php' )
		);

		$stripe_connect_disconnect_url = wp_nonce_url( $stripe_connect_disconnect_url, 'edds-stripe-connect-disconnect' );

		return $stripe_connect_disconnect_url;
	}, 1, 1 );

	ob_start();
	?>
	<div class="edd-onboarding__stripe-content-holder">
		<div class="edd-onboarding__stripe-content-logo">
			<img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="#" title="#">

			<span>The world’s most powerful and easy to use payment gateway. </span>
		</div>

		<strong class="edd-onboarding__stripe-features-title">Stripe Features we can add:</strong>

		<div class="edd-onboarding__stripe-features-divider">
			<ol class="edd-onboarding__stripe-features-listing">
				<li>Secure checkout</li>
				<li>Accept all major credit cards</li>
				<li>Supports subscriptions</li>
			</ol>

			<ol class="edd-onboarding__stripe-features-listing">
				<li>Fraud prevention tools</li>
				<li>Apple Pay & Google Pay</li>
				<li>And more…</li>
			</ol>
		</div>

		<div class="edd-onboarding__button-stripe">
			<?php echo edds_stripe_connect_setting_field(); ?>
		</div>

		<div class="edd-onboarding__stripe-additional-text">
			<span>Start accepting payments with Stripe by connecting your account. Stripe Connect helps ensure easier setup and improved security.</span>
		</div>
	</div>
	<?php

	return ob_get_clean();
}
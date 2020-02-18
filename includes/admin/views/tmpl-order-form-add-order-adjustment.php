<?php
/**
 * Order Overview: Add Adjustment form
 *
 * @package     EDD
 * @subpackage  Admin/Views
 * @copyright   Copyright (c) 2020, Sandhills Development, LLC
 * @license     http://opensource.org/licenses/gpl-2.0.php GNU Public License
 * @since       3.0
 */
?>

<div class="edd-order-overview-modal">
	<form class="edd-order-overview-add-adjustment">
		<fieldset>
			<legend>
				<?php esc_html_e( 'Adjustment Type', 'easy-digital-downloads' ); ?>
			</legend>

			<p>
				<label for="fee">
					<input
						type="radio"
						id="fee"
						name="type"
						value="fee"
						checked
					/>
					<?php echo esc_html_e( 'Fee', 'easy-digital-downloads' ); ?>
				</label>
			</p>

			<p>
				<label for="credit">
					<input
						type="radio"
						id="credit"
						name="type"
						value="credit"
					/>
					<?php echo esc_html_e( 'Credit', 'easy-digital-downloads' ); ?>
				</label>
			</p>
		</fieldset>

		<p>
			<label for="amount">
				<?php esc_html_e( 'Amount', 'easy-digital-downloads' ); ?>
			</label>
			<span class="edd-amount">
				<?php if ( 'before' === $currency_position ) : ?>
					<?php echo edd_currency_filter( '' ); ?>
				<?php endif; ?>

				<input
					type="text"
					id="amount"
					value="{{ data.amountFormatted }}"
					required
				/>

				<?php if ( 'after' === $currency_position ) : ?>
					<?php echo edd_currency_filter( '' ); ?>
				<?php endif; ?>
			</span>
		</p>

		<p>
			<label for="description">
				<?php esc_html_e( 'Description', 'easy-digital-downloads' ); ?>
			</label>
			<input
				type="text"
				id="description"
				value="{{ data.description }}"
			/>
		</p>

		<p class="submit">
			<input
				type="submit"
				class="button button-primary edd-ml-auto"
				value="<?php esc_html_e( 'Add Adjustment', 'easy-digital-downloads' ); ?>"
				<# if ( '' === data.id ) { #>
					disabled
				<# } #>
			/>
		</p>
	</form>
</div>
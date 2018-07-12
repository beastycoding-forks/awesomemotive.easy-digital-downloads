<?php
/**
 * Order Addresses Schema Class.
 *
 * @package     EDD
 * @subpackage  Database\Schemas
 * @copyright   Copyright (c) 2018, Easy Digital Downloads, LLC
 * @license     http://opensource.org/licenses/gpl-2.0.php GNU Public License
 * @since       3.0.0
 */

namespace EDD\Database\Schemas;

// Exit if accessed directly
defined( 'ABSPATH' ) || exit;

/**
 * Order Addresses Schema Class.
 *
 * @since 3.0
 */
class Order_Addresses extends Base {

	/**
	 * Array of database column objects
	 *
	 * @since  3.0
	 * @access public
	 * @var array
	 */
	public $columns = array(

		// id
		array(
			'name'     => 'id',
			'type'     => 'bigint',
			'length'   => '20',
			'unsigned' => true,
			'extra'    => 'auto_increment',
			'primary'  => true,
			'sortable' => true
		),

		// order_id
		array(
			'name'     => 'order_id',
			'type'     => 'bigint',
			'length'   => '20',
			'unsigned' => true,
			'default'  => '0'
		),

		// first_name
		array(
			'name'       => 'first_name',
			'type'       => 'mediumtext',
			'searchable' => true,
			'sortable'   => true
		),

		// last_name
		array(
			'name'       => 'last_name',
			'type'       => 'mediumtext',
			'searchable' => true,
			'sortable'   => true
		),

		// address
		array(
			'name'       => 'address',
			'type'       => 'mediumtext',
			'searchable' => true,
			'sortable'   => true
		),

		// address2
		array(
			'name'       => 'address2',
			'type'       => 'mediumtext',
			'searchable' => true,
			'sortable'   => true
		),

		// city
		array(
			'name'       => 'city',
			'type'       => 'mediumtext',
			'searchable' => true,
			'sortable'   => true
		),

		// region
		array(
			'name'       => 'region',
			'type'       => 'mediumtext',
			'searchable' => true,
			'sortable'   => true
		),

		// postal_code
		array(
			'name'       => 'postal_code',
			'type'       => 'varchar',
			'length'     => '32',
			'default'    => '',
			'searchable' => true,
			'sortable'   => true
		),

		// country
		array(
			'name'       => 'country',
			'type'       => 'mediumtext',
			'searchable' => true,
			'sortable'   => true
		),

		// date_created
		array(
			'name'       => 'date_created',
			'type'       => 'datetime',
			'default'    => '0000-00-00 00:00:00',
			'created'    => true,
			'date_query' => true,
			'sortable'   => true
		),

		// date_modified
		array(
			'name'       => 'date_modified',
			'type'       => 'datetime',
			'default'    => '0000-00-00 00:00:00',
			'modified'   => true,
			'date_query' => true,
			'sortable'   => true
		)
	);
}

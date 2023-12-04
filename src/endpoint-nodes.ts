/**
 * The API does not allow to retrieve the synopsis in json format.
 * The root element of the synopsis XML is the endpoint in the singular.
 */
export const endpointNodes: Map<string, string> = new Map([
  ['addresses', 'address'],
  ['attachments', 'attachment'],
  ['carriers', 'carrier'],
  ['cart_rules', 'cart_rule'],
  ['carts', 'cart'],
  ['categories', 'category'],
  ['combinations', 'combination'],
  ['configurations', 'configuration'],
  ['contacts', 'contact'],
  ['content_management_system', 'content_management_system'],
  ['countries', 'country'],
  ['currencies', 'currency'],
  ['customer_messages', 'customer_message'],
  ['customer_threads', 'customer_thread'],
  ['customers', 'customer'],
  ['customizations', 'customization'],
  ['deliveries', 'delivery'],
  ['employees', 'employee'],
  ['groups', 'group'],
  ['guests', 'guest'],
  ['image_types', 'image_type'],
  ['images', 'image'],
  ['languages', 'language'],
  ['manufacturers', 'manufacturer'],
  ['messages', 'message'],
  ['order_carriers', 'order_carrier'],
  ['order_cart_rules', 'order_cart_rule'],
  ['order_details', 'order_detail'],
  ['order_histories', 'order_history'],
  ['order_invoices', 'order_invoice'],
  ['order_payments', 'order_payment'],
  ['order_slip', 'order_slip'],
  ['order_states', 'order_state'],
  ['orders', 'order'],
  ['price_ranges', 'price_range'],
  ['product_customization_fields', 'product_customization_field'],
  ['product_feature_values', 'product_feature_value'],
  ['product_features', 'product_feature'],
  ['product_option_values', 'product_option_value'],
  ['product_options', 'product_option'],
  ['product_suppliers', 'product_supplier'],
  ['products', 'product'],
  ['search', 'search'],
  ['shop_groups', 'shop_group'],
  ['shop_urls', 'shop_url'],
  ['shops', 'shop'],
  ['specific_price_rules', 'specific_price_rule'],
  ['specific_prices', 'specific_price'],
  ['states', 'state'],
  ['stock_availables', 'stock_available'],
  ['stock_movement_reasons', 'stock_movement_reason'],
  ['stock_movements', 'stock_movement'],
  ['stocks', 'stock'],
  ['stores', 'store'],
  ['suppliers', 'supplier'],
  ['supply_order_details', 'supply_order_detail'],
  ['supply_order_histories', 'supply_order_history'],
  ['supply_order_receipt_histories', 'supply_order_receipt_history'],
  ['supply_order_states', 'supply_order_state'],
  ['supply_orders', 'supply_order'],
  ['tags', 'tag'],
  ['tax_rule_groups', 'tax_rule_group'],
  ['tax_rules', 'tax_rule'],
  ['taxes', 'tax'],
  ['translated_configurations', 'translated_configuration'],
  ['warehouse_product_locations', 'warehouse_product_location'],
  ['warehouses', 'warehouse'],
  ['weight_ranges', 'weight_range'],
  ['zones', 'zone'],
]);

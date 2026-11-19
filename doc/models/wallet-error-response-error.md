
# Wallet Error Response Error

The JSON error body returned by every wallet, transaction, adjustment, purchase, and Wallet Product endpoint for `400`, `404`, `409`, `422`, `500`, and `503` responses. A `403` is not JSON; it is the plain text `403 Forbidden`.

## Structure

`WalletErrorResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | `string[]` | Required | Human-readable messages. These may be reworded, so match on `code` instead. |
| `code` | `string` | Required | A stable, machine-readable reason, for example `wallet_depleted`, `wallet_not_found`, `wallet_product_not_found`, `price_point_archived`, `kind_invalid`, or `parameter_missing`. Failures that come from record validation, such as a field that fails a model rule, report `validation_failed`. |
| `invoiceUid` | `string \| undefined` | Optional | Returned only by Create Wallet Purchase with `purchase_paid_but_uncredited`, `purchase_declined_invoice_open`, `purchase_invoice_left_open` and `purchase_payment_outcome_unknown`: the uid of the invoice the purchase created. Check it before buying again. |
| `invoiceNumber` | `string \| undefined` | Optional | Returned alongside `invoice_uid`: the number of the invoice the purchase created. |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof WalletErrorResponseError) {
    console.log(error.result);
  }
}
```


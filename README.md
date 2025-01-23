# Product Data JSON System

This system is designed to create a JSON file in the local file system, store product data, and render that data in a table on the user interface.

## Overview

The system does the following:
1. Creates a JSON file with product data.
2. Writes the given product details into the JSON file.
3. Reads the data from the file system.
4. Renders the product data in a table on the UI with the following fields:
   - **ID**
   - **Product Title**
   - **Price (INR)**
   - **SKU**
![Screenshot (256)](https://github.com/user-attachments/assets/70f9e541-8fa4-49ef-92e4-a6fd70222728)

### Product Data Example

The following data is stored in the JSON file:

```json
{
  "product_id": 654321,
  "title": "Product A",
  "price": "15000.00",
  "sku": "1307A 0101000"
}


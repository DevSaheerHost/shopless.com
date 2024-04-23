# shopless.com
This is the future of shopping app or site :);
#hello





import requests

def send_order_to_whatsapp(order_details):
    whatsapp_api_endpoint = "https://api.whatsapp.com/send"
    phone_number = "whatsapp_business_number"
    message = "New order received:\n" + order_details

    payload = {
        "phone": phone_number,
        "text": message
    }

    response = requests.post(whatsapp_api_endpoint, data=payload)

    if response.status_code == 200:
        print("Order sent to WhatsApp successfully!")
    else:
        print("Failed to send order to WhatsApp.")

# Example usage
order_details = "Order ID: 12345, Product: ABC, Quantity: 2"
send_order_to_whatsapp(order_details)
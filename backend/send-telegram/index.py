import json
import os
import urllib.request
import urllib.parse

def handler(event: dict, context) -> dict:
    '''Отправка заявок с сайта в Telegram администратору'''
    
    method = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    try:
        body = json.loads(event.get('body', '{}'))
        name = body.get('name', 'Не указано')
        phone = body.get('phone', 'Не указан')
        message = body.get('message', 'Нет комментариев')
        
        bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
        chat_id = '96609347'
        
        if not bot_token:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Bot token not configured'}),
                'isBase64Encoded': False
            }
        
        text = f'''🔔 Новая заявка с сайта OtelShin

👤 Имя: {name}
📞 Телефон: {phone}
💬 Комментарий: {message}

Свяжитесь с клиентом как можно скорее!'''
        
        telegram_url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
        data = urllib.parse.urlencode({
            'chat_id': chat_id,
            'text': text,
            'parse_mode': 'HTML'
        }).encode()
        
        req = urllib.request.Request(telegram_url, data=data, method='POST')
        with urllib.request.urlopen(req) as response:
            response_data = response.read()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'success': True, 'message': 'Заявка отправлена'}),
            'isBase64Encoded': False
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': str(e)}),
            'isBase64Encoded': False
        }

import logging

logging.basicConfig(level = logging.INFO)

def divide_numbers(a,b):
    return a / b

def main():
    try:
        result = divide_numbers(10,0)
        logging.info(f"result = {result}")
        
    except Exception as e:
        logging.error(f"error:{e}")
    

if __name__ == "__main__":
    main()
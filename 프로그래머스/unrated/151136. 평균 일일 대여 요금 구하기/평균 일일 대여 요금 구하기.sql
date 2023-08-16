-- 코드를 입력하세요
SELECT round(SUM(daily_fee) / count(daily_Fee)) as AVERAGE_FEE from car_rental_company_car where car_type='SUV'


# ex1
## 1-Select
### question 1
```
ELECT id,name,price
FROM public.items
ORDER BY price
```
### question 2
```
SELECT id,name,price
FROM public.items
WHERE price>80
ORDER BY price
```
### question 3
```
SELECT fname,lname
from public.customers
order by lname
FETCH FIRST 3 ROW ONLY
```

### question 4
```
SELECT lname
from public.customers
order by lname DESC
```
## 2-foreignkeys
### question 1
```
CREATE TABLE purchases (
	id serial PRIMARY KEY,
	item_id integer references public.items (id) NOT NULL,
    customer_id  integer  references public.customers (id) NOT NULL
	)
```

### question 2
```
INSERT INTO public.purchases (customer_id )
VALUES (1);
```
error generated 1- the key is etteled as not null... 2- when a column is a foreign key it cant be null

### question 3
```
INSERT INTO public.purchases (item_id,customer_id)
VALUES (1,1),(1,3),(2,1),(2,2),(3,4);
```
## 3-foreignkeys part 2
### question 1
```
select * from public.purchases
```
not really usefull because we need to know ids by heart

### question 2
```
select public.purchases.id, public.customers.lname,public.customers.fname,public.items.name
from public.purchases
inner JOIN items ON purchases.item_id = items.id
inner JOIN customers ON public.purchases.customer_id = public.customers.id
```
###

### question 3
```
select public.purchases.id, public.customers.lname,public.customers.fname,public.items.name
from public.purchases
inner JOIN items ON purchases.item_id = items.id
inner JOIN customers ON public.purchases.customer_id = public.customers.id
WHERE  public.customers.id = 4
```


### question 4
```
select public.purchases.id,public.purchases.item_id, public.customers.lname,public.customers.fname,public.items.name
from public.purchases
inner JOIN items ON purchases.item_id = items.id
inner JOIN customers ON public.purchases.customer_id = customers.id
WHERE items.name in ('Large desk ','Small Desk ')

```

## question 4
```
INSERT INTO public.purchases (item_id,customer_id)
VALUES (1,3)
```

## question 5
```
select  public.customers.fname,public.customers.lname,public.items.name
from public.purchases
inner JOIN items ON purchases.item_id = items.id
inner JOIN customers ON public.purchases.customer_id = customers.id
```


# ex2

## question 1
 ```
SELECT * FROM  public.customer
```

## question 2
 ```
SELECT first_name || ' ' || last_name AS full_name
FROM  public.customer
```
## question 3
 ```
SELECT DISTINCT   create_date 
FROM  public.customer
```
## question 4
 ```
SELECT DISTINCT  *
FROM  public.customer
ORDER BY first_name DESC
```
## question 5
 ```
SELECT film_id, title, description,rental_rate
FROM  public.film
ORDER BY rental_rate
```
## question 6
 ```
SELECT address, phone
FROM  public.address
where district = 'Texas' 

```

## question 7
 ```
SELECT *
FROM  public.film
where film_id BETWEEN 15 AND 20; 
```

## question 8
 ```
SELECT film_id, title, description, length,rental_rate
FROM  public.film
where LOWER(title) = LOWER('Forest Gump')
```

## question 9
 ```
SELECT film_id, title, description, length,rental_rate
FROM  public.film
where LOWER(title) ILIKE('Fo%')
```

## question 10
```
	select * from 
	public.film
	order by replacement_cost
	FETCH FIRST 10 ROW ONLY
```



## question 11
```
	select * from 
	public.film
	order by replacement_cost
	OFFSET 10
	FETCH FIRST 10 ROW ONLY
```


## question 12
```
	select  amount,payment_date, first_name,last_name
	from 
	public.payment
	inner join public.customer ON payment.customer_id = customer.customer_id
	order by customer.customer_id

```
## question 13
```
	select  film.film_id,
	title,inventory_id
	from public.film
	LEFT JOIN inventory 
	ON inventory.film_id = film.film_id
	where (inventory_id > 0) IS NOT TRUE

```
## question 14
```
	select  city,country
	from public.city
	inner JOIN  public.country
	ON public.country.country_id= public.city.country_id
```
## question 15
```
select  
public.staff.first_name || ' ' ||public.staff.last_name AS Staff_name,  
public.customer.first_name || ' ' ||public.customer.last_name AS Customer_name,  
public.customer.customer_id,
public.payment.payment_date,
public.payment.amount
from public.payment 

inner JOIN  public.staff ON   public.staff.staff_id = public.payment.staff_id
inner JOIN  public.customer ON public.customer.customer_id = public.payment.customer_id

Order By public.staff.staff_id
```
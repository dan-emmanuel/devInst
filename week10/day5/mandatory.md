

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



# Create
## question 1
```
CREATE DATABASE bootcamp
```

## question 2
```
CREATE TABLE students (
	user_id serial PRIMARY KEY,
	last_name VARCHAR ( 50 ) NOT NULL,
	first_name VARCHAR ( 50 ) NOT NULL,
	birth_date date 
	)
```
# Insert
## question 1
```
INSERT INTO public.students (last_name,first_name , birth_date)
    VALUES ('Marc', 'Benichou','02/11/1998'),
	('Yoan', 'Cohen', '2010-12-03'),
	('Lea', 'Benichou', '1987-07-27'),
	('Amelia', 'Dux', '1996-04-07'),
	('David', 'Grez','2003-06-14'),
	('Omer', 'Simpson', '1980-10-03');
```
## question 2
```
INSERT INTO public.students (first_name ,last_name,  birth_date)
    VALUES ('Dan-Emmanuel', 'Azoulay','1990-10-01')
```

# Select
## question 1
```
SELECT * from public.students
```
## question 2
```
SELECT first_name,last_name 
from public.students
WHERE last_name = 'Benichou' 
 AND first_name = 'Marc'
```

## question 3
```
SELECT first_name,last_name 
from public.students
WHERE last_name = 'Benichou' 
 OR first_name = 'Marc'
```

## question 4
```

SELECT first_name,last_name 
from public.students
WHERE first_name LIKE '%a%';

```

## question 5
```

SELECT first_name,last_name 
from public.students
WHERE first_name ILIKE '%a';

```

## question 6
```

SELECT first_name,last_name 
from public.students
WHERE first_name ILIKE '%a';

```

## question 7
```
SELECT first_name,last_name 
from public.students
WHERE first_name ILIKE '_%a';

```


## question 8
```
SELECT first_name,last_name 
from public.students
WHERE  user_id BETWEEN  1 and 3;;

```
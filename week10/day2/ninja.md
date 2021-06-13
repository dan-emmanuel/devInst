


# question 1
```
SELECT user_id,first_name,last_name 
from public.students
ORDER BY last_name
FETCH FIRST 3 ROW ONLY
```
# question 2
```
SELECT user_id,first_name,last_name,birth_date
from public.students
ORDER BY birth_date DESC
FETCH FIRST ROW ONLY
```

# question 3
```
SELECT user_id,first_name,last_name,birth_date
from public.students
OFFSET 2 ROWS 
FETCH FIRST 3 ROW ONLY; 
```


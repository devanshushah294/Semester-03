Create Database Employee_Info;
use Employee_Info;


--1. Display all the employees whose name starts with �m� and 4 th character is �h�.
	Select	EID, EName 
	From	Employee
	Where	Ename like 'm%';

--2. Find the value of 3 raised to 5. Label the column as output.
	Select	power(3,5)
	as 'Output';

--3. Write a query to subtract 20 days from the current date.
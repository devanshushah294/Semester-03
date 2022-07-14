Create Database Employee_Info;
use Employee_Info;


--1. Display all the employees whose name starts with “m” and 4 th character is “h”.
	Select	EID, EName 
	From	Employee
	Where	Ename like 'm%';

--2. Find the value of 3 raised to 5. Label the column as output.
	Select	power(3,5)
	as 'Output';

--3. Write a query to subtract 20 days from the current date.
	Select	GETDATE()-20
	as 'Date before 20 Days';

--4. Write a query to display name of employees whose name starts with “j” and contains “n” in their name.
	Select	EName 
	From	Employee
	where	EName like 'j%n%';

--5. Display 2nd to 9th character of the given string “SQL Programming”.
	Select	SUBSTRING('SQL Programming',2,9);

--6. Display name of the employees whose city name ends with “ney” &contains six characters.
	Select	EName
	from	Employee
	where	City like '%ney';

--7. Write a query to convert value 15 to string.
	Select	CONVERT(varchar(10),15)
	As		'15 to varchar';

--8. Add department column with varchar (20) to Employee table.
	Alter	table	Employee
	Add		department	varchar(20);

--9. Set the value of department to Marketing who belongs to London city.
	Update	Employee
	set		Department ='Marketing' 
	where	City = 'London';

--10. Display all the employees whose name ends with either “n” or “y”.
	Select	EName
	from	Employee
	where	EName like '%n' or EName like '%y';
	
--	or

	Select	EName
	from	Employee
	where	EName like '%[n,y]';

--11. Find smallest integer value that is greater than or equal to 63.1, 63.8 and -63.2.
	Select CEILING(63.1),CEILING(63.8),CEILING(-63.2);
	
--12. Display all employees whose joining date is not available.	Select	EName 	from	Employee	where	JoiningDate is null;--13. Display name of the employees in capital letters and city in small letters.	Select UPPER(EName),LOWER(city)	from Employee;--14. Change the data type of Ename from varchar (30) to char (30).	Alter table Employee	Alter column Ename char(30);--
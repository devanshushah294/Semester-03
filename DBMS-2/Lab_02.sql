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
	
--12. Display all employees whose joining date is not available.
	Select	EName 
	from	Employee
	where	JoiningDate is null;

--13. Display name of the employees in capital letters and city in small letters.
	Select UPPER(EName),LOWER(city)
	from Employee;

--14. Change the data type of Ename from varchar (30) to char (30).
	Alter table Employee
	Alter column Ename char(30);

--15. Display city wise maximum salary.
	Select City ,Max(salary) as 'MaximumSalary'
	from Employee
	group by City;

--16. Produce output like <Ename> works at <city> and earns <salary> (In single column).
	select RTrim(EName) + ' works at ' + City + ' and earns ' + Cast(Salary as varchar) as 'WorkingStatus'
	from Employee;

--17. Find total number of employees whose salary is more than 5000.
	Select count(EID) 
	from Employee 
	where Salary>5000;

--18. Write a query to display first 4 & last 3 characters of all the employees.
	Select SUBSTRING(EName,1,4) as 'First4', SUBSTRING(EName,len(Ename)-2,3) as 'Last3'
	From Employee;
	
	Select left(Ltrim(EName),4) as 'First4', right(RTrim(EName),3) as 'Last3'
	from Employee;

--19. List the city having total salaries more than 15000 and employees joined after 1st January, 2014.
	Select Sum(Salary) as 'sal',City
	from Employee 
	Group by City
	having Sum(Salary)>15000;

--20. Write a query to replace “u” with “oo” in Ename.
	Select Replace(EName,'u','oo') as 'ReplaceEname'
	from Employee;

--21. Display city with average salaries and total number of employees belongs to each city.
	Select AVG(Salary) as 'AverageSalary',count(EID) as 'NumberOfEmployee', City
	from Employee
	group by City;

--22. Display total salaries paid to female employees.
	Select SUM(Salary) as 'TotalSalaryToFemale'
	from Employee
	Where Gender = 'female';

--23. Display name of the employees and their experience in years.
	Select DATEDIFF(year,JoiningDate,getdate()),EName
	from Employee;

--24. Remove column department from employee table.
	Alter Table Employee Drop column Department;

--25. Update the value of city from syndey to null.
	Update Employee Set City = null
	Where city = 'Syndey';

--26. Retrieve all Employee name, Salary & Joining date.
	Select EName,Salary,JoiningDate
	from Employee;

--27. Find out combine length of Ename & Gender.
	Select len(EName)+len(Gender)
	from Employee;

--28. Find the difference between highest & lowest salary.
	Select Max(Salary)-Min(Salary)
	from Employee;

--29. Rename a column from Ename to FirstName.
	SP_Rename 'Employee.EName' , 'FirstName';	

--30. Rename a table from Employee to EmpMaster.
	SP_Rename 'Employee','EmpMaster';
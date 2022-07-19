Create Database Person_Info;
Use Person_Info;

Insert into Department Values (1,'Admin', 'Adm', 'A-Block')
Insert into Department Values (2,'Computer', 'CE', 'C-Block')
Insert into Department Values (3,'Civil', 'CI', 'G-Block')
Insert into Department Values (4,'Electrical', 'EE', 'E-Block')
Insert into Department Values (5,'Mechanical', 'ME', 'B-Block')


Insert into Person Values (101,'Rahul Tripathi', 2, 56000, '2000-01-01', 'Rajkot')
Insert into Person Values (102,'Hardik Pandya', 3, 18000, '2001-09-25', 'Ahmedabad')
Insert into Person Values (103,'Bhavin Kanani', 4, 25000, '2000-05-14', 'Baroda')
Insert into Person Values (104,'Bhoomi Vaishnav', 1, 39000, '2005-02-08', 'Rajkot')
Insert into Person Values (105,'Rohit Topiya', 2, 17000, '2001-07-23', 'Jamnagar')
Insert into Person Values (106,'Priya Menpara', Null, 9000, '2000-10-18', 'Ahmedabad')
Insert into Person Values (107,'Neha Sharma', 2, 34000, '2002-12-25', 'Rajkot')
Insert into Person Values (108,'Nayan Goswami', 3, 25000, '2001-07-01', 'Rajkot')
Insert into Person Values (109,'Mehul Bhundiya', 4, 13500, '2005-09-01', 'Baroda')
Insert into Person Values (110,'Mohit Maru', 5, 14000, '2000-05-25', 'Jamnagar')

--1. Find all persons with their department name & code. 
	Select PersonName,DepartmentCode,DepartmentCode
	from Person inner join Department
	on person.DepartmentId = department.DepartmentID

--2. Give department wise maximum & minimum salary with department name.
	Select Max(Person.Salary) as 'MaximumSalary',min(person.Salary) as 'MinimumSalary',DepartmentName
	from Person inner join Department
	on person.DepartmentId = department.DepartmentID
	group by DepartmentName

--3. Find all departments whose total salary is exceeding 100000.
	Select Sum(Person.salary),DepartmentName
	from Person inner join Department
	on person.DepartmentId = department.DepartmentID
	group by DepartmentName
	having Sum(Person.salary)>100000

--4. Retrieve person name, salary & department name who belongs to Jamnagar city.
	Select PersonName,Salary,DepartmentName
	from Person inner join Department
	on person.DepartmentId = department.DepartmentID
	where City = 'Jamnagar';

--5. Find all persons who does not belongs to any department.
	Select PersonName
	from Person left outer join Department
	on person.DepartmentId = department.DepartmentID
	where departmentName is null

--6. Find department wise person counts.
	Select count(person.personID),DepartmentName
	from Person inner join Department
	on person.DepartmentId = department.DepartmentID
	group by DepartmentName

--7. Find average salary of person who belongs to Ahmedabad city.
	Select Avg(Salary),city
	from Person
	group by city
	having city = 'ahmedabad'

--8. Produce Output Like: <PersonName> earns <Salary> from department <DepartmentName> monthly.(In single column)
	Select PersonName+' earns '+cast(Salary as varchar)+' from Department '+Departmentname
	from Person inner join Department
	on person.DepartmentId = department.DepartmentID

--9. List all departments who have no persons.
	Select Departmentname
	from Person inner join Department
	on person.DepartmentId = department.DepartmentID
	group by DepartmentName
	having count(person.personID) = 0;

--10. Find city & department wise total, average & maximum salaries.
	Select	Sum(person.Salary) as 'TotalSalary',
			Avg(person.Salary) as 'AverageSalary',
			Max(person.Salary) as 'MaximumSalary',
			city
	from Person inner join Department
	on person.DepartmentId = department.DepartmentID
	group by city

	Select	Sum(person.Salary) as 'TotalSalary',
			Avg(person.Salary) as 'AverageSalary',
			Max(person.Salary) as 'MaximumSalary',
			DepartmentName
	from Person inner join Department
	on person.DepartmentId = department.DepartmentID
	group by DepartmentName

--11. Display Unique city names.
	Select Distinct(city) from person;

--12. List out department names in which more than two persons.
	Select Count(person.personId), DepartmentName
	from Person inner join Department
	on person.DepartmentId = department.DepartmentID
	group by DepartmentName
	having Count(person.personId)>2


13. Combine person name’s first three characters with city name’s last three characters in single column.
	Select Substring(PersonName,1,3)+' '+Substring(city,len(city)-2,3)
	from person

--14. Give 10% increment in Computer department employee’s salary.
	Update Person Set Salary = Salary - (0.1)*Salary
	where departmentid=(SELECT DEPARTMENTID FROM DEPARTMENT WHERE DEPARTMENTNAME='COMPUTER')

--15. Display all the person name’s who’s joining dates difference with current date is more than 365 days.
	Select 

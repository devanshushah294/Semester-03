Create Database Worker_Info;
Use Worker_Info;
/*


2. All tables SelectAll (If foreign key is available than do write join and take columns on select list)
3. All tables SelectPK
4. Create Procedure that takes Department Name & Designation Name as Input and Returns a 
table with Worker’s First Name, Salary, Joining Date & Department Name.
5. Create Procedure that takes FirstName as an input parameter and displays’ all the details of 
the worker with their department & designation name.
6. Create Procedure which displays department wise maximum, minimum & total salaries.
• Views
1. Create a view that display first 100 workers details.
2. Create a view that displays designation wise maximum, minimum & total salaries.
3. Create a view that displays Worker’s first name with their salaries & joining date, it also displays 
duration column which is difference of joining date with respect to current date.
4. Create a view which shows department & designation wise total number of workers.
5. Create a view that displays worker names who don’t have either in any department or 
designation.
• User Defined Functions
1. Create a table valued function which accepts DepartmentID as a parameter & returns a worker 
table based on DepartmentID.
2. Create a table valued function which returns a table with unique city names from worker table.
3. Create a scalar valued function which accepts two parameters start date & end date, and 
returns a date difference in days.
4. Create a scalar valued function which accepts two parameters year in integer & month in 
integer and returns total days in passed month & year.
5. Create a scalar valued function which accepts two parameters year in integer & month in
integer and returns first date in passed month & year.
*/
--• Stored Procedures

--1. All tables Insert, Update & Delete
	--Department Table
		--Insert

		Insert into Department values()
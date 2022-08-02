Create Database Worker_Info
Use Worker_Info

Create Table Designation(
	DesignationID		int				Primary Key	Identity(11, 1),
	DesignationName		varchar(100)	Not Null	Unique
)


Create Table Department(
	DepartmentID		int				Primary Key Identity(1, 1),
	DepartmentName		varchar(100)	Not Null	Unique
)



Create Table Person(
	WorkerID			int				Primary Key Identity(101, 1),
	FirstName			varchar(100)	Not Null,
	LastName			varchar(100)	Not Null,
	Salary				decimal(8, 2)	Not Null,
	JoiningDate			datetime		Not Null,
	DepartmentID		int				Foreign Key References Department(DepartmentID),
	DesignationID		int				Foreign Key	References Designation(DesignationID)
)


------------- Records ------------

Insert into Designation Values ('Jobber')
Insert into Designation Values ('Welder')
Insert into Designation Values ('Clerk')
Insert into Designation Values ('Manager')
Insert into Designation Values ('CEO')


Insert into Department Values ('Admin')
Insert into Department Values ('IT')
Insert into Department Values ('HR')
Insert into Department Values ('Account')


Insert into Person Values ('Rahul', 'Anshu', 56000, '1990-01-01', 1, 12)
Insert into Person Values ('Hardik', 'Hinsu', 18000, '1990-09-25', 2, 11)
Insert into Person Values ('Bhavin', 'Kamani', 25000, '1991-05-14', Null, 11)
Insert into Person Values ('Bhoomi', 'Patel', 39000, '2014-02-20', 1, 13)
Insert into Person Values ('Rohit', 'Rajgor', 17000, '1990-07-23', 2, 15)
Insert into Person Values ('Priya ', 'Mehta', 25000, '1990-10-18', 2, Null)
Insert into Person Values ('Neha', 'Trivedi', 18000, '2014-02-20', 3, 15)


-- • Stored Procedures
-- 1. All tables Insert, Update & Delete

--Designation Table

	Create Procedure PR_Designation_Insert
	@designationName varchar(100)
	as
	Begin
		Insert Into designation values(@designationName); 	
	End;
	Exec PR_Designation_Insert 'hello';

	Create Procedure PR_Designation_Delete
	@designationName varchar(100)
	as
	Begin
		Delete from designation 
		where designationName = @designationName; 	
	End;
	Exec PR_Designation_Delete 'hello';

	Create Procedure PR_Designation_Update
	@designationName varchar(100),
	@newDesignationName varchar(100)
	as
	Begin
		Update designation 
		set designationName = @newDesignationName
		where designationName = @designationName; 	
	End;
	Exec PR_Designation_update 'hello','world';


-- Department Table
	Create Procedure PR_Department_Insert
	@DepartmentName varchar(100)
	as
	Begin
		Insert Into Department values(@DepartmentName); 	
	End;
	Exec PR_Department_Insert 'hello';

	Create Procedure PR_Department_Delete
	@DepartmentName varchar(100)
	as
	Begin
		Delete from Department 
		where DepartmentName = @DepartmentName; 	
	End;
	Exec PR_Department_Delete 'hello';

	Create Procedure PR_Department_Update
	@DepartmentName varchar(100),
	@newDepartmentName varchar(100)
	as
	Begin
		Update Department 
		set DepartmentName = @newDepartmentName
		where DepartmentName = @DepartmentName; 	
	End;
	Exec PR_Department_update 'hello','world';
	

-- Person
	create procedure PR_Person_Insert
	@FirstName			varchar(100),
	@LastName			varchar(100),	
	@Salary				decimal(8, 2),	
	@JoiningDate		datetime,	
	@DepartmentID		int,	
	@DesignationID		int			
	as
	begin
		insert into Person values (@FirstName,@LastName,@Salary,@JoiningDate,@DepartmentID,@DesignationID)
	end

	create procedure PR_Person_update
		@WorkerID			int,	
		@FirstName			varchar(100),
		@LastName			varchar(100),	
		@Salary				decimal(8, 2),	
		@JoiningDate			datetime,	
		@DepartmentID		int,	
		@DesignationID		int			
		as
		begin
			update Person set
				FirstName=@FirstName,
				LastName=@LastName,
				Salary=@Salary,
				JoiningDate=@JoiningDate,
				DepartmentID=@DepartmentID,
				DesignationID=@DesignationID
				WHERE WorkerID=@WorkerID
		end

		create procedure PR_Person_Delete
		@WorkerID			int
		as
		begin
			delete from Person where WorkerID=@WorkerID
		end

		execute PR_Person_delete 108


-- 2. All tables SelectAll (If foreign key is available than do write join and take columns on select list)\
	Create Procedure PR_AllTable_SelectAll
	as
	Begin
	Select Person.WorkerID,Person.FirstName,Person.LastName,Person.Salary,Person.JoiningDate,Person.DepartmentId, Department.DepartmentName,Person.DesignationID,Designation.DesignationName from 
	person inner join Department
	on person.DepartmentID = Department.DepartmentID
	inner join designation on Person.DesignationID = Designation. DesignationID
	End
	exec PR_AllTable_SelectAll

-- 3. All tables SelectPK
	Create Procedure PR_Person_SelectByPrimaryKey
	@WorkerID int
	as
	Begin
	select * from Person
	where person.WorkerID = @WorkerID;  
	End


-- All tables SelectPK
	Create Procedure PR_Designation_SelectByPrimaryKey
	@designationId int
	as
	Begin
	select * from Designation
	where DesignationID = @designationId;  
	End

	Create Procedure PR_Department_SelectByPrimaryKey
	@departmentId int
	as
	Begin
	select * from Department
	where departmentId = @departmentId;  
	End


-- 4. Create Procedure that takes Department Name & Designation Name as Input and Returns a table with Worker’s First Name, Salary, Joining Date & Department Name.
	Create Procedure PR_IdentifyByDepartmentNameAndDesignationName
	@departmentName varchar(100),
	@designationName varchar(100)
	as 
	Begin
		Select person.FirstName, person.Salary, person.Salary, person.JoiningDate, Department.DepartmentName  
		from person inner join Department
		on person.DepartmentID = Department.DepartmentID
		inner join designation on Person.DesignationID = Designation. DesignationID
		where Designation.DesignationName = @designationName and Department.DepartmentName = @departmentName
	End

	Exec PR_IdentifyByDepartmentNameAndDesignationName 'admin', 'clerk';

-- 5. Create Procedure that takes FirstName as an input parameter and displays’ all the details of the worker with their department & designation name.
	Create Procedure getDetailsByFirstName
	@FirstName varchar(100)
	as
	Begin
		Select Person.WorkerID,Person.FirstName,Person.LastName,Person.Salary,Person.JoiningDate,Person.DepartmentId, Department.DepartmentName,Person.DesignationID,Designation.DesignationName from 
		person inner join Department
		on person.DepartmentID = Department.DepartmentID
		inner join designation on Person.DesignationID = Designation. DesignationID
		where person.firstName = @FirstName
	End
	Exec getDetailsByFirstName 'Rahul';
-- 6. Create Procedure which displays department wise maximum, minimum & total salaries.
	Create Procedure getDeptWiseSalaries
	as
	Begin
		Select department.DepartmentName, max(person.salary) as 'Maximum Salary', min(person.salary) as 'Minimum Salary', sum(person.salary) as 'Total Salary' from 
		person inner join department 
		on person.departmentId = department.DepartmentId
		group by departmentName
	End
	Exec getDeptWiseSalaries


--• Views

--1. Create a view that display first 100 workers details.
	Create view displayFirst100Workers
	as 
	Select top 100 Person.WorkerID,Person.FirstName,Person.LastName,Person.JoiningDate,person.DepartmentID,Department.DepartmentName,person.DesignationID,Designation.DesignationName from
	person inner join Department
	on person.DepartmentID = Department.DepartmentID
	inner join designation on Person.DesignationID = Designation.DesignationID;

--2. Create a view that displays designation wise maximum, minimum & total salaries.
	Create view designationWiseMaxMinTotalSalary
	as
	Select Designation.DesignationName, Max(Person.salary) as MaximumSalary ,Min(Person.salary) as MinimumSalary, sum(Person.salary) as totalSalary
	from person inner join designation
	on person.DesignationID = Designation.DesignationID
	group by designation.designationName

--3. Create a view that displays Worker’s first name with their salaries & joining date, it also displays duration column which is difference of joining date with respect to current date.
	Create view workerSpecificDetails
	as
	Select FirstName, Salary, JoiningDate, Convert(varchar(100),DateDiff(YEAR,JoiningDate,GETDATE()))+' '+'Years' as WorkingSince from
	Person

--4. Create a view which shows department & designation wise total number of workers.

	--View For Department
	Create view DepartmentWiseWorkers
	as
	Select Department.DepartmentName, count(person.WorkerID) as 'NumberOfWorkers'  from
	Person inner join Department
	on Person.DepartmentID = Department.DepartmentID
	group by Department.DepartmentName;

	--View for Designation
	Create view DesignationWiseWorkers
	as
	Select Designation.DesignationID, Designation.DesignationName,Count(Person.WorkerID) as 'NumberOfWorkers'  from
	Person inner join Designation
	on Person.DesignationID = Designation.DesignationID
	group by Designation.DesignationID, Designation.DesignationName;

--5. Create a view that displays worker names who don’t have either in any department or designation
	Create view NotInDesignationOrNotInDepartment
	as
	Select FirstName from 
	Person
	where DesignationID is NULL or DepartmentID is NULL


--1. Create a table valued function which accepts DepartmentID as a parameter & returns a worker table based on DepartmentID.

--2. Create a table valued function which returns a table with unique city names from worker table.
--3. Create a scalar valued function which accepts two parameters start date & end date, and returns a date difference in days.
--4. Create a scalar valued function which accepts two parameters year in integer & month in integer and returns total days in passed month & year.
--5. Create a scalar valued function which accepts two parameters year in integer & month in integer and returns first date in passed month & year
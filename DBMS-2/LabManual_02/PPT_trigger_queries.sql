Create table Student 
(
	rollNo			int,
	studentName		varchar(50),
	branch			varchar(50),
	semester		int,
	cpi				decimal(4,2)
)
Create table MessageOfStudent
(
msg varchar(500),
operation varchar(10)
)

create procedure insertInStudent
@rollNo		 int,
@studentName varchar(50),		
@branch		 varchar(50),
@semester	 int,
@cpi		 decimal(4,2)
as
Begin
Insert into Student values(@rollNo,@studentName,@branch,@semester,@cpi)
End


ALter trigger insertTrigger
on Student
for insert
as
Begin
	declare @rollNo		 int
	declare @studentName varchar(50)
	declare @branch		 varchar(50)
	declare @semester	 int
	declare @cpi		 decimal(4,2)
	select 
	@rollNo		=rollNo,		
	@studentName=studentName,
	@branch		=branch		,
	@semester	=semester	,
	@cpi		=cpi		
	from inserted
	Insert into MessageOfStudent values (@studentName+' with roll no '+convert(varchar,@rollNo)+' '+@branch+' '+convert(varchar,@semester)+' '+convert(varchar,@cpi),' Insert')
End

Insert into Student values (101,'Ramesh','ce',3,9)
select * from MessageOfStudent
Create table Message(MSG varchar(500));
Create trigger tr_insert_Department
on Department
for insert
as 
Begin
	declare @departmentId int
	declare @departmentName varchar(200)
	select @departmentId = DepartmentID ,@DepartmentName = DepartmentName from inserted
	insert into Message values((@departmentName+'with depatmentId'+cast(@departmentId as varchar)))
end
Insert into Department values(6,'new','dep','x-block')
select* from Message

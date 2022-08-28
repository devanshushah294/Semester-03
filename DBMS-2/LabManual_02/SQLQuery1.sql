Create Trigger tr_insert
on EmpMaster
for insert
as
Begin
print 'record is inserted'
--Select * from Inserted
End

Insert into EmpMaster values(22,'Devanshu','male','02-22-22',50000,'Rajkot');

Create Trigger tr_Update
on EmpMaster 
for Update
As
Begin
print 'record is updated';
select* from inserted;
End
update EmpMaster set FirstName='Devanshu' where FirstName = 'dev'
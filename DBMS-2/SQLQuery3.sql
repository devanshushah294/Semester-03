Create Database PersonInfo_02
USE PersonInfo_02

--1 Create INSERT, UPDATE & DELETE Stored Procedures for Person table.
Create Procedure PR_Person_Insert
@personId		int,
@personName		varchar(50),
@salary			decimal(8,2),
@JoiningDate	DateTime,
@city			varchar(100),
@age			int,
@BirthDate		DateTime
as
Begin
Insert into Person(personId,personName,salary,JoiningDate,city,age,BirthDate)
values(@personId,@personName,@salary,@JoiningDate,@city,@age,@BirthDate)
End
Insert Into Person values(1,'Devanshu',50000,getdate(),'rajkot',21,'04-29-03')
Select* from Person
--2 Create a trigger that fires on INSERT, UPDATE and DELETE operation on the Person table. For that, create a new table PersonLog to log (enter) all operations performed on the Employee table.--Insert QueryCreate TRIGGER tr_Person_InsertByPKon Personfor Insertas Begindeclare @personID intdeclare @personName varchar(250)select @personID = PersonId,@personName = personName from inserted	Insert into PersonLog values (@personID,@personName,'Insert',getdate())EndInsert into Person values(1,'devanshu',10000,getdate(),'rajkot','21','04-29-2003')Select * from PersonLog--Update QueryCreate Trigger tr_Person_UpdateByPKon Personfor UpdateasBegindeclare @personID intdeclare @personName varchar(250)select @personID = PersonId, @personName = personName from InsertedInsert into PersonLog values (@personID,@personName,'Update',getdate())endupdate person set salary=50000 where personID = 1;--Delete QueryCreate Trigger tr_Person_DeleteByPKon Personfor DeleteasBegindeclare @personID intdeclare @personName varchar(250)select @personID = personID, @personName= PersonName from Deletedinsert into PersonLog values (@personID,@personName,'Delete',getDate())endDelete person where personId = 1--3 Create an INSTEAD OF trigger that fires on INSERT, UPDATE and DELETE operation on the Person table. For that, log all operation performed on the Person table into PersonLog.
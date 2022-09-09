Create Database Person_Info_03
use Person_Info_03

create table PersonLog
(
PLogId int Primary Key,
PersonName varchar(250) Not Null,
Operation varchar(50) Not Null,
UpdateDate DateTime Not Null
)

--1
 Begin Try
	Select (25/0)
 End Try
 Begin Catch
	select 'Error Occur that is : '+ERROR_MESSAGE() as 'ErrorMessage'
 End Catch

 --2
 Begin Try
	Insert into PersonLog values()
 End Try
 Begin Catch
 End Catch

 --3 Create procedure which prints the error message that “The PLogID is already taken. Try another one”
 Alter Proc PR_PersonLog_Insert
	@pLogId		int,
	@personName varchar(250)
 as
 Begin
	Begin Try
	Insert into PersonLog values(@pLogId,@personName,'Insert',GETDATE())
 End Try
Begin Catch
	print('The PLogID is already taken. Try another one');
End Catch
 End
	
Exec PR_PersonLog_Insert 1,'Devanshu'

--4 Create procedure that print the sum of two numbers: take both number as integer & handle exception with all error functions if any one enters string value in numbers otherwise print result.
Create Procedure PR_Sum
@number1 varchar(5),
@number2 int
Begin
	Begin Try
		Select sum(@number1+@number2) as 'sum'
	End Try
	Begin Catch
		print('Enter the number only');
	End Catch
End

--5 Throw custom exception using stored procedure which accepts PLogID as input & that throws Error like no plogid is available in database
Create Procedure PR_PersonLog_Insert_02
	@pLogId		int,
	@personName varchar(250)
 as
 Begin
	Begin Try
	Insert into PersonLog values(@pLogId,@personName,'Insert',GETDATE())
 End Try
Begin Catch
	if
	print('The PLogID is already taken. Try another one');
End Catch
 End

 --6 Create cursor with name per_cursor which takes PLogID & PersonName as variable and produce combine output with PLogID & Person Name.
 Declare
 @pLogId		int,
 @PersonName	varchar(250)
 Declare per_cursor cursor
 for
 select pLogId, personName from PersonLog
 open per_cursor
 fetch next from per_cursor into
	@pLogId,
	@personName
while @@FETCH_STATUS=0
	Begin
		print(cast(@plogID as varchar)+'-'+@personName);
		fetch next from per_cursor into 
		@pLogId,
		@personName
	End
Close per_cursor
Deallocate per_cursor


















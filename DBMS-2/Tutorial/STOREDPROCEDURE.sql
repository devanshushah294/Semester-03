Create DATABASE STOREDPROCEDURE_355;
--Answer 1
Alter Procedure PR_MST_City_Select
as
begin
	select* 
	from MST_city inner join MST_State
	on MST_city.stateID = MST_State.State_ID
end
exec PR_MST_City_Select

--Answer 2
Create Procedure Pr_MST_City_Insert
	@CityID			int,
	@CityName		varchar(250),
	@Pincode		varchar(6),
	@CityRemarks	varchar(500),
	@StateID		int 
as
Begin
	Insert into MST_City
	(
	CityID,	
	CityName,	
	Pincode,
	CityRemarks,
	StateID
	)
	values
	(
	@CityID,		
	@CityName,	
	@Pincode,	
	@CityRemarks,
	@StateID
	)
End
exec Pr_MST_City_Insert 123,'rajkot','360001','very good city',1
exec Pr_MST_City_Insert 122,'ahmedabad','320001','very hot city',1
insert into MST_State values(1,'Gujarat');

--Answer 3
Create Procedure PR_MST_City_Update
	@CityID			int,
	@CityName		varchar(250),
	@Pincode		varchar(6),
	@CityRemarks	varchar(500),
	@StateID		int 
as
begin
	update MST_City 
	Set	CityName = @CityName,
		Pincode	= @Pincode,
		CityRemarks = @CityRemarks,
		StateID	= @StateID
	where CityId = @CityID
end
exec PR_MST_City_Update 122,'Gandhinagar','320001','capital of gujarat',1

--answer 4
Create Procedure PR_MST_Delete
@CityId int
as
begin
	delete from MST_city
	where cityId = @CityID
end
exec PR_MST_Delete 122

--answer 5
Create Procedure PR_MST_City_SelectByPK
@CityId int
as
begin
	Select* from MST_City
	where cityId = @CityId
end
exec PR_MST_City_SelectByPK 123

--answer 6
Create Procedure PR_MST_City_SelectByPincodeStartWith360
as
begin
Select* from MST_City 
where Pincode like '360%'
end
exec PR_MST_City_SelectByPincodeStartWith360

--answer 7
Create Procedure Pr_MST_City_SelectByCityNamePincode
@CityName varchar(250),
@Pincode varchar(6)
as
begin
select* from Mst_City
where cityname = @CityName and pincode = @Pincode
end
exec pr_MST_City_SelectByCityNamePincode 'rajkot','360001'

--answer 8
Create Procedure Pr_Mst_City_SelectByCityRemarks
@cityRemarks varchar(500)
as
begin
	select * from MST_City
	where CityRemarks = @cityRemarks
end
exec PR_Mst_City_SelectByCityRemarks 'very good city'

--answer 9
Create Procedure PR_MST_City_SelectByStateID
@stateId int
as
begin
	select* from MST_City
	where StateId = @stateId
end
exec PR_MST_City_SelectByStateID 1

--answer 10
Create Procedure PR_MST_City_SelectByStateIDCityID
@StateId int,
@cityId int
as
begin
	select * from MST_City
	where StateID = @stateId and CityId = @cityId
end
exec PR_MST_City_SelectByStateIDCityID 1,123
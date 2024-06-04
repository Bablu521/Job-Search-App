# Collections:

## User Collection
1. firstName 
2. lastName
3. username ( firstName + lastName) 
4. email ⇒ ( unique )
5. password
6. recoveryEmail ⇒ (not unique)
7. DOB (date of birth, must be date format 2023-12-4)
8. mobileNumber ⇒ (unique)
9. role ⇒ (User, Company_HR )
10. status (online, offline)

## Company Collection
1. companyName ⇒ ( unique )
2. description (Like what are the actual activities and services provided by the company ? )
3. industry ( Like Mental Health care )
4. address
5. numberOfEmployees ( must be range such as 11-20 employee)
6. companyEmail ⇒ ( unique )
7. companyHR ( userId ) 

## Job Collection
1. jobTitle ( Like **NodeJs back-end developer** )
2. jobLocation ( **onsite, remotely, hybrid** )
3. workingTime ( **part-time , full-time** )
4. seniorityLevel ( enum of **Junior, Mid-Level, Senior,Team-Lead, CTO** )
5. jobDescription ( identify what is the job and what i will do i accepted )
6. technicalSkills ( array of skills, like  **nodejs  , typescript** ,…)
7. softSkills (array of Skills , like **time management , team worker,**.. )
8. addedBy( what is the **compantHrId** who is added this job)

## Application Collection
1. jobId ( the Job Id )
2. userId ( the applier Id )
3. userTechSkills ( array of the applier technical Skills )
4. userSoftSkills ( array of the applier soft Skills )
5. userResume ( must be pdf , upload this pdf on cloudinary )

--------------------------------------------------------------------------------------

# User APIs

1. Sign Up
2. Sign In
    - Sign In using  (email or mobileNumber)  and password
    - don’t forget to update the status to online after SignIn
3. update account.
    - you can update ( email , mobileNumber , recoveryEmail , DOB , lastName , firstName)
    - if user update the email , mobileNumber make sure that the new data doesn’t conflict with any existing data in your  database
    - User must be loggedIn
    - only the owner of the account can update his account data
4. Delete account
    - only the owner of the account can delete his account data
    - User must be loggedIn
5. Get user account data 
    - only the owner of the account can get his account data
    - User must be loggedIn
6. Get profile data for another user 
    - send the userId in params or query
7. Update password 
8. Forget password ( without sending any email , make sure of your data security specially the OTP and the newPassword )
9. Get all accounts associated to a specific recovery Email

--------------------------------------------------------------------------------------

# Company APIs

1. Add company 
    - apply authorization with role ( Company_HR )
2. Update company data
    - only the company owner can update the data
    - apply authorization with role (  Company_HR )
3. Delete company data
    - only the company owner can delete the data
    - apply authorization with role ( Company_HR)
4. Get company data 
    - send the companyId in params to get the desired company data
    - return all jobs related to this company
    - apply authorization with role ( Company_HR)
5. Search for a company with a name. 
    - apply authorization with the role ( Company_HR and User)

--------------------------------------------------------------------------------------

# Jobs APIs

1. Add Job 
    - apply authorization with the role ( Company_HR )
2. Update Job
    - apply authorization with the role ( Company_HR )
3. Delete Job
    - apply authorization with the role ( Company_HR )
4. Get all Jobs with their company’s information.
    - apply authorization with the role ( User , Company_HR )
5. Get all Jobs for a specific company.
    - apply authorization with the role ( User , Company_HR )
    - send the company name in the query and get this company jobs.
6. Get all Jobs that match the following filters 
    - allow user to filter with workingTime , jobLocation , seniorityLevel and jobTitle,technicalSkills
    - one or more of them should applied
    **Exmaple** : if the user selects the   
    **workingTime** is **part-time** and the **jobLocation** is **onsite** 
    , we need to return all jobs that match these conditions
    - apply authorization with the role ( User , Company_HR )

--------------------------------------------------------------------------------------

# Application APIs

1. Apply to Job
    - This API will add a new document in the application Collections with the new data
    - apply authorization with the role ( User )
2. Get all applications for specific Jobs
    - each company Owner can take a look at the applications for his jobs only, he has no access to other companies’ application
    - return each application with the user data, not the userId
    - apply authorization with role (  Company_HR )
var Common = {
    BindDropdown: function BindDropdown(Id, EnumType, ControlId) {
        var url = commonSettings.baseUrl + 'Admin/Common/BindDropdown';
        $.ajax({
            type: "POST",
            async: false,
            traditional: true,
            url: url,
            dataType: "json",
            data: {
                Id: Id,
                EnumType: EnumType
            },
            success: function (resultData) {
                var strhtml = "";
                strhtml = "<option value=''>--Select--</option>";
                $(ControlId).html('');
                if (resultData.length > 0) {
                    for (var i = 0; i <= resultData.length - 1; i++) {
                        strhtml = strhtml + "<option value=" + resultData[i].Id + ">" + resultData[i].Name + "</option>";
                    }
                }
                $(ControlId).html(strhtml);
            },
            error: function (data, err) {
                if (err.responseText == CustomActionUrl.SessionExpiredText) {
                    window.location.href = commonSettings.baseUrl + CustomActionUrl.SessionExpireRedirectUrl;
                }
                else {
                    Common.Message(AllConfirmationMessage.ErrorTitle, AllConfirmationMessage.ErrorText, AllConfirmationMessage.ErrorIcon, AllConfirmationMessage.ButtonText)
                }
            }
        });
    },
    MultiSelectDropdown: function BindDropdown(Id, EnumType, ControlId) {
        var url = commonSettings.baseUrl + 'Admin/Common/BindDropdown';
        $.ajax({
            type: "POST",
            async: false,
            traditional: true,
            url: url,
            dataType: "json",
            data: {
                Id: Id,
                EnumType: EnumType
            },
            success: function (resultData) {
                var strhtml = "";

                $(ControlId).html('');
                if (resultData.length > 0) {
                    for (var i = 0; i <= resultData.length - 1; i++) {
                        strhtml = strhtml + "<option value=" + resultData[i].Id + ">" + resultData[i].Name + "</option>";
                    }
                }
                $(ControlId).html(strhtml);
            },
            error: function (data, err) {
                if (err.responseText == CustomActionUrl.SessionExpiredText) {
                    window.location.href = commonSettings.baseUrl + CustomActionUrl.SessionExpireRedirectUrl;
                }
                else {
                    Common.Message(AllConfirmationMessage.ErrorTitle, AllConfirmationMessage.ErrorText, AllConfirmationMessage.ErrorIcon, AllConfirmationMessage.ButtonText)
                }
            }
        });
    },
    Message: function (title, text, icon, button) {
        swal({
            title: title,
            text: text,
            icon: icon,
            button: button,
            closeOnClickOutside: false,
        });
    }
}

var AllConfirmationMessage = {


    //****************For Alertify popup*************************
    // For save
    SaveTitle: "Success",
    SaveText: "Record saved successfully",

    // For Update 
    UpdateTitle: "Updated",
    UpdateText: "Record Updated successfully",

    // For Delete 
    DeleteTitle: "Deleted",
    DeleteText: "Record Deleted successfully",

    // Common for save/update/delete Icon
    SuccessIcon: "success",

    // Common for save/update/delete/warning
    ButtonText: "Ok",

    // Common for Error
    ErrorText: "Some Error Occurred",

    //For Warning
    WarningTitle: "Warning",
    WarningIcon: "warning",
    WarningText: "Please select one node at first",
    //For Error
    ErrorTitle: "Error",
    ErrorIcon: "error",


    //For Confirm Delete
    ConfirmTitle: "Are you sure?",
    ConfirmText: "You want to delete !",
    ConfirmIcon: "warning",

    //For Timming
    Timer: 4000,


    //****************For Alertify popup ends*************************

    AddUser: "User added successfully !",
    AddRFi: "RFI added successfully !",
    AddSubContractor: "Subcontractor added  successfully !",
    UpdateUser: "User updated successfully!",
    ExistsOffice: "This office cannot be deleted because this office is already in use.",
    UpdateSubContractor: "Subcontractor updated  successfully !",
    Deleteuser: "User deleted  successfully !",
    DeleteRfi: "RFI deleted  successfully !",
    Deletesubcontractor: "subcontractor deleted  successfully !",
    ExistsUser: "User already exists in current project !",
    AddTask: "Task added successfully !",
    UpdateTask: "Task updated successfully !",
    AddUserTask: "Please add at least one user to proceed.",
    ConfirmDeleteRfi: "Are you sure you want to delete this record ?",
    AddExpenseAllocation: "Expense Allocation Saved Sucessfully !",
    DeleteExpenseAllocation: "Expense Allocation deleted  successfully !",
    UpdateExpenseAllocation: "Expense Allocation updated successfully!",
    CodeMustSelected: "You must have code selected to delete it",
    NodeMustSelected: "Please select one Cost Code node first",
    NodeName: "Node name cannot be empty.",
    FileSize: "File size must 10kb or below",
    ImageType: "Image must JPG, PNG, or GIF File Max 3MB!",
    UserAlreadyAssigned: "This user is already assigned to another task.",
    EmailAlreadyExists: "Email Id Already Exists",
    InvoiceAlreadyExists:"Invoice number already used",
    InvoiceAlreadyExistsinPayment: "Invoice Already used in Payment.",
    RevisionAlreadyExists: "Revision number already used",
    FormData: "Form Data is not supported",
    NameRequired: "Name Required",
    ProjectFileSize: "File size must 3mb or below",
    ProjectFileSize: "File size must 10mb or below",
    TradeAlreadyExixts: "This trade name already exists!",
    TierName: "Tier Name can not be Empty",
    RecordCopied: "Copied Successfully",
    MailSent: "Mail Sent Successfully",
    LocationInserted: "Location Inserted Successfully",
    LocationUpdated: "Location Updated Successfully",
    LocationDeleted: "Location Deleted Successfully",
    SelectDivision: "Please Select Division First To Add Cost Code",
    AddEquipment: "Equipment is required",
    AlreadyAddedDivision: "Divison Code Or Division Name Already in Use",
    AlreadyAddedCostCode: "Cost Code Number Or Cost Code Name Already in Use",
    EditCostCodeOrDivision: "Please Select Division or Cost Code To Edit",
    DelCostCodeOrDivision: "Please Select Division or Cost Code To Delete",
    ProjectStageExists: " This Project Stage cannot be deleted because this stage is already in use",
    ProjectTypeExists: "This Project Type cannot be deleted because this type is already in use",
    DepartmentExists: "This Department cannot be deleted because this deparment is already in use",
    BidTypeExists: "This Bid Type cannot be deleted because this type is already in use",
    RegionExists: "This Region cannot be deleted because this region is already in use",
    TradesExists: "This Trade cannot be deleted because this trade is already in use",
    CreateBudget: "Please Create The Budget First",
    LineItem: "Line Item Already Exists",
    LockBudget: "Budget Locked Successfully",
    SovTypeExists: "SOV Can Not Be Deleted",
    BudgetLock: "Budget is already Locked",
    NoCostCode: "Please asssign Cost Code First To This Project Before Creating",
    SovAlreadyExists: "Schedule Of Value Already Exists",
    LineItemAlreadyExists: "Line Item Already Exists",
    DistributeResponse: " Please select at least one Response",
    SubmitterDistributer: " Please select at least one Distributor",
    DistributerEmailSentSucess: " Responses Distributed Successfully",
    InspectionDeletedWarning: "Inspection Can Not Be Deleted",
};

var ImageSetting = {
    uploadIconDefault: commonSettings.baseUrl + "Content/CMS/img/uploadicon.png",
}

//*******Ready Function*********//
$(document).ready(function () {
    // Common.Message("Success","Record Saved Successfully","success","Save");
});
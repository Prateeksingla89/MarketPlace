var commonSettings = {
    //baseUrl: 'http://stgsd.appsndevs.com/CMSQA/',
    // baseUrl: 'http://stgsd.appsndevs.com/CMS/',
    baseUrl: 'http://localhost:57736/',
    GernalTab: 'project1',
    ACTIVETOOLS: 'project2',
    COSTCODES: 'project3',
    LOCATIONS: 'project4',
    EQUIPMENT: 'project5',
    DIRECTORY: 'project6',
    GENERALTAB: 'contract1',
    SCHEDULEVALUE: 'contract2',
    CHNAGEORDER: 'contract3',
    PAYMENTRECEIVED: 'contract4',
    INVOICES: 'contract5',
    SubmittalAttachments_PathDownload: "Content/CMS/Attachments/SubmittalAttachments/",
};

var CustomActionUrl = {
    CreateProject: 'Admin/Project/ProjectCreate?Tab=',
    UpdateProject: 'Admin/Project/EditProject?Tab=',
    SeacrhProject: 'Admin/DashBoard/index?ProjectName=',
    AdminBudget: 'Admin/Budget?ProjectID=',
    SeacrhProjectType: '&FilterType=',
    SeacrhSelectedId: '&Selectedid=',
    ContractId: '&primeContractId=',
    RFQId: '&rfqId=',
    ProjectId: '&ProjectID=',
    ProjectID: '&projectID=',
    IsUpdated: '&isUpdated=True',
    CompanyId: '&CompanyId=',
    Closepop: '&ClosePopType=',
    EditProject: 'Admin/Project/EditProject?Tab=',
    AddMoreUser: '&MoreUser=',
    AddMoreSub: '&MoreSub=',
    AddMoreRfi: 'MoreRfi',
    MoreUserValue: 'popopen',
    MoreSubValue: 'subpopopen',
    Closepop_Userpop: 'UserPopOpen',
    Closepop_UserpopUP: 'UserPopOpenUp',
    Closepop_Subpop: 'SubPopOpen',
    Closepop_SubpopUp: 'SubPopOpenUp',
    DeleteRfi: 'DeleteRfi',
    AddMoreEA: 'MoreEA',
    DeleteEA: 'DeleteEA',
    CreatePrimeContract: 'Admin/PrimeContract/AddEditPrimeContract?Tab=',
    CreateRFQ: 'Admin/PrimeContract/CreateRFQ?Tab=',
    DashBoardListing: 'Admin/DashBoard/index',
    SessionExpireRedirectUrl: '/Home/SessionExpire',
    SessionExpiredText: "SessionExpired",
    ViewTransmittal: 'Admin/Transmittal/ViewTransmittal?projectID=',
    ViewMeeting: 'Admin/Meeting/AddEditMeeting?ProjectID=',
    ChangeEvent: 'Admin/ChangeEvent/AddEditChangeEvent?projectID=',
    ChangeEventSearch: 'Admin/ChangeEvent/ChangeEventListing?ProjectName=',
    ChangeEventClearFilter: 'Admin/ChangeEvent/AddEditChangeEvent?projectID=',
    SubContractId: '&CommitmentSubConcId=',
    CreateSubContract: 'Admin/Commitment/CreateSubContract?Tab=',
    InspectionListing: 'Admin/Inspection/ViewInspectionListing?projectId=',
    InspectionListingUsingByTemplateId: 'Admin/Inspection/GetInspectionItemUsingByTemplateId?inspectionId=',
    InspectionLineItemStatus: 'Admin/Inspection/GetInspectionItemUsingByTemplateId?inspectionId=',
    InspectionLineItemChart: 'Admin/Inspection/GetInspectionLineItemChartById?inspectionId=',
};

var CommanFunctionClass =
{
    getParameterByName: function (name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    },
    readURL: function (input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#logoUpload').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    },
    ResetFormValidations: function (formId) {
        var isValidNew = $("#" + formId).validate();
        isValidNew.resetForm();
    }
};
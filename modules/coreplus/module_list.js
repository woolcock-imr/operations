var coreplus_module_list=function(){
    var L=$vm.module_list,A=_app_id,B=$vm.hosting_path+'/woolcock-imr/operation/modules';
    var v={ app_id:_app_id}
    //---------------------------------------------
    //database table:
    var invoice_import_tid='20009695';
    var medicare_import_tid='20009696';
    var invoice_new_referrers_tid='20006813';
    var medical_services_tid='20006813';
    //---------------------------------------------
    L[A+'coreplus_invoice_import']               ={table_id:invoice_import_tid, var:v,url:B+'/coreplus/import/coreplus_invoice_import.html'};
    L[A+'coreplus_rejected_medicare_import']     ={table_id:medicare_import_tid,var:v,url:B+'/coreplus/import/coreplus_rejected_medicare_import.html'};
    L[A+'coreplus_rejected_amount']              ={table_id:invoice_import_tid, var:v,url:B+'/coreplus/report/coreplus_rejected_amount.html'};
    L[A+'coreplus_new_referrers']              ={table_id:invoice_new_referrers_tid, var:v,url:B+'/coreplus/report/coreplus_new_referrers.html'};
    L[A+'coreplus_new_referrers_with_name']              ={table_id:invoice_new_referrers_tid, var:v,url:B+'/coreplus/report/coreplus_new_referrers_with_name.html'};
    L[A+'coreplus_medical_services_import']              ={table_id:medical_services_tid, var:v,url:B+'/coreplus/import/coreplus_medical_services_import.html'};
}
coreplus_module_list();

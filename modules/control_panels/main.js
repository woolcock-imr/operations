var operation__ID=function(){
    //---------------------------------------------
    _app_id='woolcock_operation_';
    var L=$vm.module_list,A=_app_id,B=$vm.hosting_path+'/woolcock-imr/operation/modules/old',H=$vm.hosting_path;
    //---------------------------------------------
    //database table:
    var new_appointment_tid     ='20000911';
    var staff_departure_tid     ='20008635'
    var list_managers_tid       ='20002145';
    var list_student_tid        ='20008634';
    var list_it_tid             ='20002151';
    var list_lab_tid            ='20002152';
    var list_pi_tid             ='20002153';
    var list_clinic_tid         ='20004672';
    var list_hr_tid             ='20002154';
    var car_tid                 ='20000906';
    var car_booking_record_tid  ='20000908';
    var facility_file_tid       ='20000044';
    var invoice_import_tid          ='20009695';
    var medicare_import_tid         ='20009696';
    var medical_services_import_tid ='20006813';
    var invoice_new_referrers_tid   ='20006813';
    var pc2_Induction_tid           ='20002110';
    var temperature_monitoring_tid  ='20007567';
    var eng_knowledge_base_tid      ='20000441';
    //var meddra_tid                  ='20009283';
    var event_tid                   ='20006853';
    var monthly_ref_num_tid         ='20009755';
    var meddra_llt_import_tid   ='20009717';
    var meddra_pt_import_tid    ='20009718';
    var meddra_soc_import_tid   ='20009719';
    var sleep_study_booking_tid     ='400448'
    var cms_referrer_tid     ='400449'
    var sleep_study_patient_tid     ='400440'
    var sleep_study_extension_tid   ='20010715'
    var study_extension_item_cost_tid   ='20010718'
    var abbreviation_tid            ='20010890'
    var reporting_date_tid          ='20011307'

    //---------------------------------------------


    //---------------------------------------------


    //variables
    var v={
        app_id:_app_id,
        list_managers_tid:list_managers_tid,
        list_it_tid:list_it_tid,
        list_lab_tid:list_lab_tid,
        list_pi_tid:list_pi_tid,
        list_clinic_tid:list_clinic_tid,
        list_hr_tid:list_hr_tid,
        list_student_tid:list_student_tid,
        medical_services_import_tid:medical_services_import_tid,
        //daily:A+'daily',

        //car booking:
        car_tid:car_tid,

        //car booking library:
        car_booking_car:A+'car_booking_car',
        car_booking_record_tid:car_booking_record_tid,
        car_booking_record_module:A+'car_booking_record',
        car_booking_daily_calendar_module:A+'car_booking_daily_calendar',

        sleep_study_booking_tid:sleep_study_booking_tid,
        sleep_study_patient_tid:sleep_study_patient_tid,
        cms_referrer_tid:cms_referrer_tid,
        reporting_date_tid:reporting_date_tid,
    }
    //---------------------------------------------
    //panels
    //---------------------------------------------
    //links HR
    L[A+'new_appointment']=             {table_id:new_appointment_tid,  var:v,  url:B+'/hr/new_appointment.html',form_module:A+'new_appointment_form'};
    L[A+'new_appointment_form']=        {table_id:new_appointment_tid,  var:v,  url:B+'/hr/new_appointment.form.html'};
    L[A+'staff_departure']=             {table_id:staff_departure_tid,  var:v,  url:B+'/hr/staff_departure.html',form_module:A+'staff_departure_form'};
    L[A+'staff_departure_form']=        {table_id:staff_departure_tid,  var:v,  url:B+'/hr/staff_departure.form.html'};
    L[A+'list_clinic']=                 {table_id:list_clinic_tid,      var:v,  url:B+'/hr/alert_email_list.html'};
    L[A+'list_managers']=               {table_id:list_managers_tid,    var:v,  url:B+'/hr/alert_email_list.html'};
    L[A+'list_it']=                     {table_id:list_it_tid,          var:v,  url:B+'/hr/alert_email_list.html'};
    L[A+'list_lab']=                    {table_id:list_lab_tid,         var:v,  url:B+'/hr/alert_email_list.html'};
    L[A+'list_pi']=                     {table_id:list_pi_tid,          var:v,  url:B+'/hr/alert_email_list.html'};
    L[A+'list_student']=                {table_id:list_student_tid,     var:v,  url:B+'/hr/alert_email_list.html'};
    L[A+'list_hr']=                     {table_id:list_hr_tid,          var:v,  url:B+'/hr/alert_email_list.html'};
    //---------------------------------------------
    //links Facilities
    L[A+'car_booking_record']=          {table_id:car_booking_record_tid,   var:v,  url:B+'/facilitiy/car_booking/booking_record.html'};
    L[A+'facility_file']=               {table_id:facility_file_tid,        var:v,  url:B+'/facilitiy/files.html'};
    //---------------------------------------------
    //links Level 2
    L[A+'coreplus_invoice_import']              ={table_id:invoice_import_tid,          var:v,url:B+'/level2/import/coreplus_invoice_import.html'};
    L[A+'coreplus_rejected_medicare_import']    ={table_id:medicare_import_tid,         var:v,url:B+'/level2/import/coreplus_rejected_medicare_import.html'};
    L[A+'coreplus_medical_services_import']     ={table_id:medical_services_import_tid, var:v,url:B+'/level2/import/coreplus_medical_services_import.html'};
    L[A+'coreplus_rejected_amount']             ={table_id:invoice_import_tid,          var:v,url:B+'/level2/report/coreplus_rejected_amount.html'};
    L[A+'coreplus_new_referrers']               ={table_id:invoice_new_referrers_tid,   var:v,url:B+'/level2/report/coreplus_new_referrers.html'};
    L[A+'coreplus_new_referrers_with_name']     ={table_id:invoice_new_referrers_tid,   var:v,url:B+'/level2/report/coreplus_new_referrers_with_name.html'};


    L[A+'coreplus_ms_mothly_referrer_number_bi']={table_id:monthly_ref_num_tid,         var:v,url:B+'/level2/data_entry/mothly_referrer_number_bi.html'};
    L[A+'yearly_referral_number']               ={table_id:monthly_ref_num_tid,         var:v,url:B+'/level2/report/yearly_referral_number.html'};
    L[A+'event_attendance_referral']            ={table_id:monthly_ref_num_tid,         var:v,url:B+'/level2/report/event_attendance_referral.html'};
    L[A+'sleep_study_total_number']             ={table_id:sleep_study_booking_tid,     var:v,url:B+'/level2/report/sleep_study_total_number.html'};
    L[A+'sleep_study_medicare']                 ={table_id:sleep_study_booking_tid,     var:v,url:B+'/level2/report/sleep_study_medicare.html'};
    L[A+'sleep_study_research_funded']          ={table_id:sleep_study_booking_tid,     var:v,url:B+'/level2/report/sleep_study_research_funded.html'};
    L[A+'sleep_study_research_all']             ={table_id:sleep_study_booking_tid,     var:v,url:B+'/level2/report/sleep_study_research_all.html'};
    L[A+'sleep_study_tco2']                     ={table_id:sleep_study_booking_tid,     var:v,url:B+'/level2/report/sleep_study_tco2.html'};
    L[A+'sleep_study_reporting_adult']          ={table_id:sleep_study_booking_tid,     var:v,url:B+'/level2/report/sleep_study_reporting_adult.html'};
    L[A+'sleep_study_reporting_11003']          ={table_id:sleep_study_booking_tid,     var:v,url:B+'/level2/report/sleep_study_reporting_11003.html'};
    L[A+'sleep_study_reporting_12250']          ={table_id:sleep_study_booking_tid,     var:v,url:B+'/level2/report/sleep_study_reporting_12250.html'};
    L[A+'sleep_study_reporting_child']          ={table_id:sleep_study_booking_tid,     var:v,url:B+'/level2/report/sleep_study_reporting_child.html'};
    L[A+'sleep_study_reporting_sf']             ={table_id:sleep_study_booking_tid,     var:v,url:B+'/level2/report/sleep_study_reporting_sf.html'};
    L[A+'sleep_study_reporting_adult_range']    ={table_id:sleep_study_booking_tid,     var:v,url:B+'/level2/report/sleep_study_reporting_adult_range.html'};
    L[A+'sleep_study_reporting_11003_range']    ={table_id:sleep_study_booking_tid,     var:v,url:B+'/level2/report/sleep_study_reporting_11003_range.html'};
    L[A+'sleep_study_reporting_12250_range']    ={table_id:sleep_study_booking_tid,     var:v,url:B+'/level2/report/sleep_study_reporting_12250_range.html'};
    L[A+'sleep_study_reporting_child_range']    ={table_id:sleep_study_booking_tid,     var:v,url:B+'/level2/report/sleep_study_reporting_child_range.html'};
    L[A+'sleep_study_reporting_sf_range']       ={table_id:sleep_study_booking_tid,     var:v,url:B+'/level2/report/sleep_study_reporting_sf_range.html'};
    L[A+'sleep_study_extension_with_year_month']={table_id:sleep_study_extension_tid,   var:v,url:B+'/level2/report/sleep_study_extension_with_year_month.html'};
    L[A+'sleep_study_extension_tco2_with_year_month']={table_id:sleep_study_extension_tid,   var:v,url:B+'/level2/report/sleep_study_extension_tco2_with_year_month.html'};
    L[A+'sleep_study_extension_with_today_minus_14']={table_id:sleep_study_extension_tid,   var:v,url:B+'/level2/report/sleep_study_extension_with_today_minus_14.html'};
    L[A+'sleep_study_extension_not_paid']={table_id:sleep_study_extension_tid,   var:v,url:B+'/level2/report/sleep_study_extension_not_paid.html'};
    L[A+'sleep_study_scoring_reporting_status']={table_id:sleep_study_extension_tid,   var:v,url:B+'/level2/report/sleep_study_scoring_reporting_status.html'};
    L[A+'sleep_study_extension_item_cost']      ={table_id:study_extension_item_cost_tid,     var:v,url:B+'/level2/report/sleep_study_extension_item_cost.html'};
    L[A+'sleep_study_statistics']      ={table_id:sleep_study_booking_tid,     var:v,url:B+'/level2/report/sleep_study_statistics.html'};
    L[A+'abbreviation']                         ={table_id:abbreviation_tid,            var:v,url:B+'/level2/report/abbreviation.html'};
    L[A+'reporting_date']                         ={table_id:reporting_date_tid,            var:v,url:B+'/level2/report/reporting_date.html'};
    L[A+'cms_referrer']                         ={table_id:cms_referrer_tid,            var:v,url:B+'/level2/report/cms_referrer.html'};
    L[A+'export_reporting_doctors']             ={table_id:sleep_study_extension_tid,   var:v,url:B+'/level2/report/export_reporting_doctors.html'};
    L[A+'export_reporting_doctors_all']             ={table_id:sleep_study_extension_tid,   var:v,url:B+'/level2/report/export_reporting_doctors_all.html'};
    L[A+'export_reporting_doctors_paid_on_date']             ={table_id:sleep_study_extension_tid,   var:v,url:B+'/level2/report/export_reporting_doctors_paid_on_date.html'};
    //---------------------------------------------
    //links Lab
    L[A+'temperature']=                {table_id:temperature_monitoring_tid,    var:v,  url:B+'/laboratory/temperature_monitoring.html'};
    L[A+'pc2_Induction']=              {table_id:pc2_Induction_tid,             var:v,  url:B+'/laboratory/pc2_Induction.html',form_module:A+'pc2_Induction_form'};
    L[A+'pc2_Induction_form']=         {table_id:pc2_Induction_tid,             var:v,  url:B+'/laboratory/pc2_Induction_form.html'};
    //---------------------------------------------
    //Engineering
    L[A+'knowledge_base']=             {table_id:eng_knowledge_base_tid,     var:v,  url:B+'/engineering/knowledge_base.html'};
    //L[A+'meddra']=                     {table_id:meddra_tid,                 var:v,  url:B+'/engineering/meddra.html'};
    L[A+'meddra_llt_import']    ={table_id:meddra_llt_import_tid,   var:v,url:B+'/engineering/meddra_llt_import.html'};
    L[A+'meddra_pt_import']     ={table_id:meddra_pt_import_tid,    var:v,url:B+'/engineering/meddra_pt_import.html'};
    L[A+'meddra_soc_import']    ={table_id:meddra_soc_import_tid,   var:v,url:B+'/engineering/meddra_soc_import.html'};
    //---------------------------------------------
    //Library
    L[A+'car_booking_car']                          ={table_id:car_tid,                 var:v,  url:H+'/vmiis/module-library/car_booking/car.html'};
    L[A+'car_booking_daily_calendar']   ={table_id:car_booking_record_tid,  var:v,  url:H+'/vmiis/module-library/car_booking/daily.html'};
    L[A+'car_booking_weekly_calendar']  ={table_id:car_booking_record_tid,  var:v,  url:H+'/vmiis/module-library/car_booking/weekly.html'};
    L[A+'car_booking_monthly_calendar'] ={table_id:car_booking_record_tid,  var:v,  url:H+'/vmiis/module-library/car_booking/monthly.html'};
    //---------------------------------------------
}
operation__ID();

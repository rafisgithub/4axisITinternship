$(document).ready(function() {
    // Division data for Bangladesh
    var divisions = {
      "Dhaka": ["Dhaka", "Gazipur", "Narayanganj","Kishorgang","Madripur","Munshiganj","Kushtia",],
      "Chittagong": ["Chittagong", "Cox's Bazar", "Comilla","Rangamati","Noakhali","Feni","Laksmipur","Brahmanbaria","Chandpur"],
      "Rajshahi": ["Rajshahi", "Bogra", "Rangpur"],
      "Khulna": ["Khulna", "Jessore", "Satkhira"],
      "Barisal": ["Barisal", "Patuakhali", "Pirojpur"],
      "Sylhet": ["Sylhet", "Moulvibazar", "Sunamganj"],
      "Rangpur": ["Rangpur", "Kurigram", "Nilphamari"],
      "Mymensingh": ["Mymensingh", "Jamalpur", "Sherpur"]
    };
  
    // Populate division dropdown
    var divisionOptions = '<option value="">Select Division</option>';
    for (var division in divisions) {
      divisionOptions += '<option value="' + division + '">' + division + '</option>';
    }
    $("#division").html(divisionOptions);
  
    // Division dropdown change event
    $("#division").change(function() {
      var selectedDivision = $(this).val();
      var districtOptions = '<option value="">Select District</option>';
  
      if (selectedDivision !== "") {
        var selectedDistricts = divisions[selectedDivision];
  
        for (var i = 0; i < selectedDistricts.length; i++) {
          districtOptions += '<option value="' + selectedDistricts[i] + '">' + selectedDistricts[i] + '</option>';
        }
      }
  
      $("#district").html(districtOptions);
    });
  });
  

function Dictionary() { 
    var vessel = {
        Type:"Type is Kayak",
        Make:"Macke is Necky",
        Model:"Model is Manitou",
        Color:"Color is Red",
        Length:14,
        type:"boat"  // Duplicate key for testing
    };
    delete vessel.type;  // Delete KVP prior to display for demonstration


    document.write(vessel.Model);
    document.getElementById("dictionary").innerHTML = vessel.Type;


}
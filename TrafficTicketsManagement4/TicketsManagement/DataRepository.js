var owners = [ { drvLicNumber: '296 840 681', firstName: 'Simon',   lastName: 'Havers',    address: '1884 Stewart Ln',  city: 'Kittanning', county: 'Armstrong',  state: 'PA', zipCode: '15638' },
               { drvLicNumber: '273-79-4157', firstName: 'Terence', lastName: 'McConnell', address: '8304 Polland Str', city: 'Meadowview', county: 'Washington', state: 'VA', zipCode: '24361' },
               { drvLicNumber: 'A402-630-468', firstName: 'Patrick', lastName: 'Atherton', address: '10744 Quincy Blvd', city: 'Cumberland', county: 'Allegany', state: 'MD', zipCode: '21502' },
{ drvLicNumber: 'C-684-394-527', firstName: 'Sarah', lastName: 'Cuchchran', address: '10804 Euton Rd', city: 'Shawnee Land', county: '', state: 'VA', zipCode: '24450' },
{ drvLicNumber: '928-37-4950', firstName: 'Michael', lastName: 'Atherton', address: '663 Vernon Drv, NW', city: 'Washington', county: '', state: 'DC', zipCode: '20012' },
{ drvLicNumber: '2938468', firstName: 'Victoria', lastName: 'Huband', address: '3958 Lubber Court', city: 'Middletown', county: 'New Castle', state: 'DE', zipCode: '19709' },
{ drvLicNumber: '851608526', firstName: 'Patrick', lastName: 'Whalley', address: '10227 Woodrow Rd', city: 'Shelbyville', county: 'Bedford', state: 'TN', zipCode: '38561' },
{ drvLicNumber: 'W639-285-940', firstName: 'David', lastName: 'Woodbank', address: '9703 Abington Ave', city: 'Hurlock', county: 'Dorchester', state: 'MD', zipCode: '21643' },
{ drvLicNumber: 'S-283-942-646', firstName: 'Emilie', lastName: 'Sainsbury', address: '4048 Utah Rd', city: 'Denville', county: 'Morris', state: 'NJ', zipCode: '07961' },
{ drvLicNumber: '860586175', firstName: 'Kelley', lastName: 'Murray', address: '8622 Rutger Farms Str', city: 'Rutger Farms', county: 'Macon', state: 'TN', zipCode: '37122' }];

var cars = [ { tagNumber: '8DE9275', drvLicNumber: '296 840 681',   make: 'Ford', model: 'Focus', year: 2000, color: 'Gray' },
             { tagNumber: 'KLT4805', drvLicNumber: '2938468',       make: 'Toyota', model: 'Corolla', year: 2016, color: 'Red' },
             { tagNumber: 'KAS9314', drvLicNumber: 'W639-285-940',  make: 'Cadillac', model: 'Escalade', year: 2008, color: 'Black' },
             { tagNumber: 'HAK3936', drvLicNumber: 'S-283-942-646', make: 'Chrysler', model: 'Crossfire', year: 2006, color: 'Red' },
             { tagNumber: 'PER2849', drvLicNumber: '296 840 681',   make: 'Buick', model: 'LeSabre', year: 2012, color: 'Silver' },
             { tagNumber: 'MWH4685', drvLicNumber: '851608526',     make: 'Honda', model: 'Accord', year: 1998, color: 'Blue' },
             { tagNumber: '971384',  drvLicNumber: '928-37-4950',   make: 'BMW', model: '325i', year: 2015, color: 'White' },
             { tagNumber: '394815',  drvLicNumber: '273-79-4157',   make: 'Jeeep', model: 'Wrangler', year: 1996, color: 'Black' }];

var violationsTypes = [ { violationName: 'Speed', description: 'Drivers are required to drive under posted speed limit.' },
{ violationName: 'Stop Sign', description: 'A driver is required to come to a complete stop at the Stop sign, even there is no other vehicle on the other street(s).' },
{ violationName: 'Red Light Steady', description: 'A vehicle must completely stop when the light is red.' },
                        { violationName: 'Red Light Flashing', description: 'If a vehicle comes to an intersection that has a flashing red light, the vehicle must first stop completely, before proceeding.' },
{ violationName: 'Red Light Right Turn', description: 'If a vehicle must make a right turn where the red light is steady, the vehicle must first completely stop before proceeding.' }];

var viewers = [ { cameraNumber: 'DGH-38460', make: 'Ashton Digital', model: 'MPH-6000', location: 'Eastern Ave and Ashburry Drv' },
                { cameraNumber: 'ELQ-79284', make: 'Seaside International', model: 'BL5', location: 'Monroe Str and Westview Rd' },
                { cameraNumber: 'MSR-59575', make: 'Ashton Digital', model: 'MPH-6000', location: 'Concordia Blvd and Sunset Way' },
                { cameraNumber: 'DHT-29417', make: 'Woodson and Sons', model: 'NG200', location: 'Temple Ave and Barclay Rd' },
                { cameraNumber: 'AHR-41518', make: 'Seaside International', model: '442i', location: 'Chesterwood Rd and Old Dutler Str' },
                { cameraNumber: 'HTR-93847', make: 'Ashton Digital', model: '366d', location: 'Monrovia Str at Moon Springs' }];

/* This function takes a violation type as argument and produces a simple violation name.
   The main purpose is to reduce the long names of some violations. */
function getViolationName(type) {
    if( (type === "Red Light Steady")   ||
        (type === "Red Light Flashing") ||
        (type === "Red Light Right Turn") ) {
        return "Red Light";
    }
    else {
        return type;
    }
}

// This function takes a violation type and creates some text that will display an explanation/description of the traffic violation to the driver.
function describeViolation(type) {
    if (type === "Red Light Steady")
        return "The vehicle drove through a steady red light. The law in our state requires that when a vehicle approaches a steady red light, it must completely stop and wait for the light to change to green";
    else if (type === "Red Light Flashing")
        return "The vehicle drove through a red light that was flashing (or blinking). The law in our state requires that if a vehicle comes to a flashing red light, whether it is at an intersection or not, the vechicle must first stop complete, the drive must observe around for pedestrians, animals, and other cars, and then cautiously";
    else if (type === "Red Light Right Turn")
        return "The vehicle turns to the right without stopping. The law in our state requires that, when a vehicle reaches a traffic light and wants to make a right turn, if the light is red, regardless of any presence or not of another vehicle or pedestrian, the vehicle must first stop completely, and then make the right turn";
    else if (type === 'Stop Sign')
        return "The vehicle did not stop at the Stop sign. The law in our state requires every non-emergency vehicle to completely stop at every Stop sign, regardless of the presence or absence of incoming or adjacent vehicles"
    else if (type === 'Speed')
        return "The vehicle drove at a speed significantly above the speed limit. The law requires that every non-emergency and non-utility vehicle drives at or below the posted speed limit (or at or below the default speed regulation where the speed is not clearly posted)";
    else
        return "The vehicle committed some type of infraction";
}

/* This function takes a tag number as argument.
   It returns a combination of the make model, year, and color of the car. */
function identifyVehicle(tagNumber) {
    for (var i = 0; i < cars.length; i++) {
        if (cars[i].tagNumber === tagNumber) {
            return cars[i].make + " " + cars[i].model + " (" + cars[i].year + ", " + cars[i].color + ")";
        }
    }
}

/* This function takes a tag number as argument.
   It returns the name of the driver/owner. */
function getDriverName(tagNumber) {
    var dln = "";

    for (var i = 0; i < cars.length; i++) {
        if (cars[i].tagNumber === tagNumber) {
            dln = cars[i].drvLicNumber;
            break;
        }
    }
    for (var j = 0; j < owners.length; j++) {
        if (owners[j].drvLicNumber === dln) {
            return owners[j].firstName + " " + owners[j].lastName;
        }
    }
}

/* This function takes a tag number as argument.
   It returns the complete address of the driver/owner. */
function getDriverAddress(tagNumber) {
    var dln = "";

    for (var i = 0; i < cars.length; i++) {
        if (cars[i].tagNumber === tagNumber) {
            dln = cars[i].drvLicNumber;
            break;
        }
    }
    for (var j = 0; j < owners.length; j++) {
        if (owners[j].drvLicNumber === dln) {
            return owners[j].address + " " + owners[j].city + " " + owners[j].state + " " + owners[j].zipCode;
        }
    }
}

/* This function takes a camera number as argument.
   This is the camera located where the violation took place.
   The function returns the location and the camera number. */
function identifyCamera(cameraNumber) {
    for (var i = 0; i < viewers.length; i++) {
        if (viewers[i].cameraNumber === cameraNumber) {
            return viewers[i].location + " (" + viewers[i].cameraNumber + ")";
        }
    }
}

/* This function takes the available status of a photo and video takens during the traffic violation.
   The function returns a sentence that will instructs the driver about how to view the photo or video or the violation. */
function getPhotoVideoOptions(p, v) {
    var sentence = "";
    var pvAvailable = false;

    if (p === true) {
        if (v === true) {
            pvAvailable = true;
            sentence = "To view the photo and/or video";
        }
        else {
            pvAvailable = true;
            sentence = "To see a photo";
        }
    }
    else { // if (p === false)
        if (v === true) {
            pvAvailable = true;
            sentence = "To review a video";
        }
        else {
            pvAvailable = false;
        }
    }

    if (pvAvailable === false)
        return "There is no photo or video available of this infraction but the violation was committed.";
    else
        return sentence + " of this violation, please access http://www.trafficviolationsmedia.com. In the form, enter the citation number and click Submit.";
}

var infractions = [ { violationNumber:  1, cameraNumber: 'MSR-59575', tagNumber: 'KLT4805', violationName: 'Stop Sign',            violationDate: '01/18/2018', violationTime: '09:12:35',    photoAvailable: false, videoAvailable: true,  paymentDueDate: '02/28/2018', paymentAmount:  75, vName: getViolationName('Stop Sign'), violationDescription: describeViolation('Stop Sign'), vehicle: identifyVehicle('KLT4805'), driverName: getDriverName('KLT4805'), driverAddress: getDriverAddress('KLT4805'), violationLocation: identifyCamera('MSR-59575'), photoVideo: getPhotoVideoOptions(false, true) },
                    { violationNumber:  2, cameraNumber: 'DHT-29417', tagNumber: '971384',  violationName: 'Speed',                violationDate: '02/06/2018', violationTime: '11:58:06',    photoAvailable: false, videoAvailable: true,  paymentDueDate: '04/05/2018', paymentAmount:  85, vName: getViolationName('Speed'), violationDescription: describeViolation('Speed'), vehicle: identifyVehicle('971384'), driverName: getDriverName('971384'), driverAddress: getDriverAddress('971384'), violationLocation: identifyCamera('DHT-29417'), photoVideo: getPhotoVideoOptions(false, true) },
                    { violationNumber:  3, cameraNumber: 'DGH-38460', tagNumber: 'PER2849', violationName: 'Red Light Steady',     violationDate: '01/31/2018', violationTime: '05:15:18 AM', photoAvailable: true,  videoAvailable: false, paymentDueDate: '03/10/2018', paymentAmount: 125, vName: getViolationName('Red Light Steady'), violationDescription: describeViolation('Red Light Steady'), vehicle: identifyVehicle('PER2849'), driverName: getDriverName('PER2849'), driverAddress: getDriverAddress('PER2849'), violationLocation: identifyCamera('DGH-38460'), photoVideo: getPhotoVideoOptions(true, false) },
                    { violationNumber:  4, cameraNumber: 'DHT-29417', tagNumber: 'MWH4685', violationName: 'Speed',                violationDate: '03/05/2018', violationTime: '16:07:15',    photoAvailable: true,  videoAvailable: true,  paymentDueDate: '04/22/2018', paymentAmount:  85, vName: getViolationName('Speed'), violationDescription: describeViolation('Speed'), vehicle: identifyVehicle('MWH4685'), driverName: getDriverName('MWH4685'), driverAddress: getDriverAddress('MWH4685'), violationLocation: identifyCamera('DHT-29417'), photoVideo: getPhotoVideoOptions(true, true) },
                    { violationNumber:  5, cameraNumber: 'MSR-59575', tagNumber: '8DE9275', violationName: 'Stop Sign',            violationDate: '01/18/2018', violationTime: '14:22:48',    photoAvailable: false, videoAvailable: true,  paymentDueDate: '03/10/2018', paymentAmount:  60, vName: getViolationName('Stop Sign'), violationDescription: describeViolation('Stop Sign'), vehicle: identifyVehicle('8DE9275'), driverName: getDriverName('8DE9275'), driverAddress: getDriverAddress('8DE9275'), violationLocation: identifyCamera('MSR-59575'), photoVideo: getPhotoVideoOptions(false, true) },
                    { violationNumber:  6, cameraNumber: 'ELQ-79284', tagNumber: 'KLT4805', violationName: 'Speed',                violationDate: '04/12/2018', violationTime: '08:16:22',    photoAvailable: false, videoAvailable: true,  paymentDueDate: '06/08/2018', paymentAmount: 100, vName: getViolationName('Speed'), violationDescription: describeViolation('Speed'), vehicle: identifyVehicle('KLT4805'), driverName: getDriverName('KLT4805'), driverAddress: getDriverAddress('KLT4805'), violationLocation: identifyCamera('ELQ-79284'), photoVideo: getPhotoVideoOptions(false, true) },
                    { violationNumber:  7, cameraNumber: 'HTR-93847', tagNumber: 'PER2849', violationName: 'Red Light Flashing',   violationDate: '01/28/2018', violationTime: '10:14:53 PM', photoAvailable: false, videoAvailable: false, paymentDueDate: '03/02/2018', paymentAmount:  45, vName: getViolationName('Red Light Flashing'), violationDescription: describeViolation('Red Light Flashing'), vehicle: identifyVehicle('PER2849'), driverName: getDriverName('PER2849'), driverAddress: getDriverAddress('PER2849'), violationLocation: identifyCamera('HTR-93847'), photoVideo: getPhotoVideoOptions(false, false) },
                    { violationNumber:  8, cameraNumber: 'AHR-41518', tagNumber: 'MWH4685', violationName: 'Speed',                violationDate: '03/31/2018', violationTime: '22:07:31',    photoAvailable: true,  videoAvailable: false, paymentDueDate: '05/15/2018', paymentAmount:  75, vName: getViolationName('Speed'), violationDescription: describeViolation('Speed'), vehicle: identifyVehicle('MWH4685'), driverName: getDriverName('MWH4685'), driverAddress: getDriverAddress('MWH4685'), violationLocation: identifyCamera('AHR-41518'), photoVideo: getPhotoVideoOptions(true, false) },
                    { violationNumber:  9, cameraNumber: 'DGH-38460', tagNumber: 'KAS9314', violationName: 'Red Light Right Turn', violationDate: '01/31/2018', violationTime: '12:30:11',    photoAvailable: true,  videoAvailable: false, paymentDueDate: '02/28/2018', paymentAmount:  60, vName: getViolationName('Red Light Right Turn'), violationDescription: describeViolation('Red Light Right Turn'), vehicle: identifyVehicle('KAS9314'), driverName: getDriverName('KAS9314'), driverAddress: getDriverAddress('KAS9314'), violationLocation: identifyCamera('DGH-38460'), photoVideo: getPhotoVideoOptions(true, false) },
                    { violationNumber: 10, cameraNumber: 'DHT-29417', tagNumber: '971384',  violationName: 'Speed',                violationDate: '02/06/2018', violationTime: '19:04:47',    photoAvailable: true,  videoAvailable: true,  paymentDueDate: '04/05/2018', paymentAmount:  85, vName: getViolationName('Speed'), violationDescription: describeViolation('Speed'), vehicle: identifyVehicle('971384'), driverName: getDriverName('971384'), driverAddress: getDriverAddress('971384'), violationLocation: identifyCamera('DHT-29417'), photoVideo: getPhotoVideoOptions(true, true) },
                    { violationNumber: 11, cameraNumber: 'ELQ-79284', tagNumber: '8DE9275', violationName: 'Speed',                violationDate: '04/15/2018', violationTime: '03:25:53 PM', photoAvailable: true,  videoAvailable: false, paymentDueDate: '06/02/2018', paymentAmount:  40, vName: getViolationName('Speed'), violationDescription: describeViolation('Speed'), vehicle: identifyVehicle('8DE9275'), driverName: getDriverName('8DE9275'), driverAddress: getDriverAddress('8DE9275'), violationLocation: identifyCamera('ELQ-79284'), photoVideo: getPhotoVideoOptions(true, false) }];

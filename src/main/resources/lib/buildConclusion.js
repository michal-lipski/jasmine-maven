if(typeof reporter !== 'undefined') {
	var specCount = 0; 
	var failCount=0; 
	for(var key in reporter.results()) { 
		specCount++; if(reporter.results()[key].result !== 'passed') failCount++; 
	} 
	specCount+' specs, '+failCount+' failures';
}
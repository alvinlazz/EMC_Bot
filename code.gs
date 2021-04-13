/**
 * Bot Welcome Message
 * Responds to an ADDED_TO_SPACE event in Hangouts Chat.
 * @param {object} event the event object from Hangouts Chat
 * @return {object} JSON-formatted response
 * @see https://developers.google.com/hangouts/chat/reference/message-formats/events
 * Don't Edit
 */
function onAddToSpace(event) {
	console.info(event);
	var message = 'Thank you for adding me to ';
	if (event.space.type === 'DM') {
		message += 'a DM, ' + event.user.displayName + '!' + ",I’ll be happy to assist you right away!, Pleases see available option using `@diya-EMC help`";
	} else {
		message += event.space.displayName;
	}
	return {
		text: message
	};
}

/**
 * Bot Remove Message
 * Responds to a REMOVED_FROM_SPACE event in Hangouts Chat.
 * @param {object} event the event object from Hangouts Chat
 * @see https://developers.google.com/hangouts/chat/reference/message-formats/events
 * Don't Edit
 */
function onRemoveFromSpace(event) {
	console.info(event);
	console.log('Bot removed from ', event.space.name);
}

/**
 * Creates a card-formatted response.
 * @param {object} widgets the UI components to send
 * @return {object} JSON-formatted response
 * Don't Edit Unless Change UI Text
 */
var DEFAULT_IMAGE_URL = 'https://goo.gl/bMqzYS';
var HEADER = {
	header: {
		title: 'EMCL1-BH Help Bot',
		//subtitle: 'Request an action !!',
		imageUrl: DEFAULT_IMAGE_URL
	}
};

/**
* Responds to a MESSAGE event triggered in Hangouts Chat.
* @param {object} event the event object from Hangouts Chat
* @return {object} JSON-formatted response
* Special Calls To Bot with images responce
*/
function onMessage(event) {
  console.info(event);
  var msg = event.message.text;
  var userMessage = msg.replace('@EMCL1-BH ', "");
  
  /**
  * Creates a card-formatted response.
  * @param {object} widgets the UI components to send
  * @return {object} JSON-formatted response
  * Don't Edit Unless Change UI
  */
  function createCardResponse(widgets) {
	  return {
	  cards: [HEADER, {
	    sections: [{
		    widgets: widgets
	    }]
	  }]
	  };
  } 

  /**
  * 
  * EXTERNAL Queries Handling
  * 
  */
	// header sent in response.
	if (userMessage.indexOf('group') > -1 || userMessage.indexOf('Group') > -1 || userMessage.indexOf('GROUP') > -1) {
		HEADER.header.imageUrl = 'https://goo.gl/mnZ37b';
    var widgets = [{
		  textParagraph: {
			  text: 'Hello, How could I help you today ?'
		  }
	  }, {
		buttons: [{
			textButton: {
				text: 'Check Service Status',
				onClick: {
					action: {
						actionMethodName: 'checkl1'  
					}
				}
			}
		}, {
			textButton: {
				text: 'Create EMCSI',
				onClick: {
          openLink: { "url": "https://jira.endurance.com/secure/CreateIssue!default.jspa" }
				}
			}
		}]
	  }];
	  return createCardResponse(widgets);
  /**
  * 
  * INTERNAL Queries Handling
  * 
  */

	} else if (userMessage.indexOf('internal') > -1 || userMessage.indexOf('Internal') > -1 || userMessage.indexOf('INTERNAL') > -1) {
		HEADER.header.imageUrl = 'https://goo.gl/EbgHuc';
    var widgets = [{
		  textParagraph: {
			  text: "Hello 😀 " + event.user.displayName +", How could I help you today ? "
		  }
	  }, {
		buttons: [{
			textButton: {
				text: 'Daily Report',
				onClick: {
					action: {
						actionMethodName: 'report'
					}
				}
			}
		}, {
			textButton: {
				text: 'Service Status',
				onClick: {
					action: {
						actionMethodName: 'status'
					}
				}
			}
		}, {
			textButton: {
				text: 'PingOne_LoginAll',
				onClick: {
          openLink: { "url": "https://desktop.pingone.com/constantcontact/Selection?cmd=selection" }
				}
			}
		}, {
			textButton: {
				text: 'IPA EIG_Box',
				onClick: {
          openLink: { "url": "https://ipa.eigbox.com/ipa/ui/" }
				}
			}
		}]
	  }];
	  return createCardResponse(widgets);

  /**
  * 
  * INTERNAL GENERAL Queries Handling
  * 
  */

	} else if (userMessage.indexOf('congrats') > -1 || userMessage.indexOf('Congrats') > -1 || userMessage.indexOf('CONGRATS') > -1 || userMessage.indexOf('congratulations') > -1 || userMessage.indexOf('Congratulations') > -1 || userMessage.indexOf('super') > -1 || userMessage.indexOf('Super') > -1 || userMessage.indexOf('Superb') > -1 || userMessage.indexOf('superb') > -1 || userMessage.indexOf('bravo') > -1 || userMessage.indexOf('good') > -1){    

    IMAGES = [
      "https://i.giphy.com/media/V8rsfft0YuagHUanGz/giphy.gif",
      "https://i.giphy.com/media/fdyZ3qI0GVZC0/giphy.gif",
      "https://i.giphy.com/media/d31w24psGYeekCZy/giphy.gif",
      "https://i.giphy.com/media/AL0XsYU0pkFTq/giphy-downsized.gif",
      "https://i.giphy.com/media/l49JCSwMXyxHnYJws/giphy.gif",
      "https://i.giphy.com/media/husF6i22eMkKdxikuv/giphy-downsized.gif",
      "https://i.giphy.com/media/la3A1FBXaDA2Im6Exb/giphy.gif",
      "https://i.giphy.com/media/detOmeyQVP0D1uCX1F/giphy.gif",
      "https://i.giphy.com/media/l2QDT49MQNfZvUHHq/giphy-downsized.gif",
      "https://i.giphy.com/media/3ohs86MaKqx6Cb9pJe/giphy.gif",
      "https://i.giphy.com/media/vmtxnxveVUodG/giphy.gif",
      "https://i.giphy.com/media/kdQuvu0LtCEjxYgTcS/giphy.gif",
      "https://i.giphy.com/media/Qs0QEnugOy0xIsFkpD/giphy.gif",
      "https://i.giphy.com/media/M9HnDXluCEgMWtqkPv/giphy.gif",
      "https://i.giphy.com/media/l0MYCn3DDRBBqk6nS/giphy.gif",
      "https://i.giphy.com/media/l3q2umc327t2nzSOQ/giphy-downsized.gif",
      "https://i.giphy.com/media/3ohs4xsq0oEhqC4why/giphy.gif",
      "https://i.giphy.com/media/5bvMcdx0gZf2mdiPjf/giphy.gif",
      "https://i.giphy.com/media/qo89zWPnfaOK4Ng74U/giphy.gif",
      "https://i.giphy.com/media/29MIbJC4aRAFOafBiP/giphy.gif",
      "https://i.giphy.com/media/crHyCHze4Pz5QBf5BS/giphy.gif",
      "https://i.giphy.com/media/V8rsfft0YuagHUanGz/giphy.gif"
      ];
    var widgets = [{
      textParagraph: {text: "<b>Your Hard Works Not Vain 🤴 🤘 🤞🏻 💖</b>\n"+ "<i>" + userMessage + "</i>" }
      }, {
		  image: { "imageUrl": IMAGES[Math.floor(Math.random() * IMAGES.length)]}
	  }];
	  return createCardResponse(widgets);    
	  
  } else if (userMessage.indexOf('HELP') > -1 || userMessage.indexOf('Help') > -1 || userMessage.indexOf('help') > -1) {
    
    message = "\n *EMCL1-BH Bot* \n```⦿ @EMCL1-BH checkip 8.8.8.8\t : Get IP information\n⦿ @EMCL1-BH abusecheck 8.8.8.8\t : (Testing)[ Check Domain/Email/IP abuse_DBs ]\n⦿ @EMCL1-BH pings 8.8.8.8\t : Get Ping status of IP/Domain\n⦿ @EMCL1-BH traceroute 8.8.8.8\t : (Testing)\n⦿ @EMCL1-BH whois 8.8.8.8\t : (Testing)\n⦿ @EMCL1-BH nslookup 8.8.8.8\t : Retrieve DNS Zone Records\n⦿ @EMCL1-BH time\t\t : Check World Time\n⦿ @EMCL1-BH group\t\t : Services offered by EMCL1\n⦿ @EMCL1-BH internal\t\t : (Testing)[ Internal Diya-EMC ]\n⦿ @EMCL1-BH check mitigation\t : (Testing)\n⦿ @EMCL1-BH quote\t\t : Quote of the day on your choice\n⦿ @EMCL1-BH congrats EMP_Name\t : Give congratulations on work/service!\n⦿ Use / to see some direct option\n⦿ @EMCL1-BH help\t\t : You are here Now!```\nIf you have any suggestion 💡 /feature request 📙 /found bug 🐛. \nMail us : _emc-bh@endurance.com_ ";
    return { text : message }; 
    
	} else if (userMessage.indexOf('checkip') > -1) {

      var res = userMessage.split(" ");
      var ips = res[1];
      var api_url = 'ipinfo.io/'+ips+'?token=8ed26c6668d449';    
      var response = UrlFetchApp.fetch(api_url).getContentText(); // Fetch the reponse from API
      const obj = JSON.parse(response);
      var responseText = JSON.stringify(obj.ip +" - "+ obj.org +" - "+ obj.country);
      return {text : "```"+responseText+"```"};

  } else if (userMessage.indexOf('abusecheck') > -1 || userMessage.indexOf('abchk') > -1) {

      //var api_url = 'https://api.abuseipdb.com/api/v2/check --data-urlencode "ipAddress="'+ips +'"-d maxAgeInDays=90 -d verbose -H "Key: 7c42c2870ead02334b28a7c570899688ed3742b3b741e50e4bca761a46cfb1a38038745ef5baec41" -H "Accept: application/json"'
      //var json = JSON.parse(responseText); // Parse the JSON text
      //console.log(json);
      
      //var answers = json.Answer.map(function(ans){return ans.data}).join('\n'); // Get the values
      //return {text : json};
      // Make a POST request with a JSON payload.
      var data = {
        'ipAddress': '1.1.1.1',
        'maxAgeInDays': 90,
        'verbose':'',
        'Key': '7c42c2870ead02334b28a7c570899688ed3742b3b741e50e4bca761a46cfb1a38038745ef5baec41'   
      };
      var options = {
        'method' : 'post',
        'contentType': 'application/json',
        'payload' : data
      };
      var response = UrlFetchApp.fetch('https://api.abuseipdb.com/api/v2/check', options);
      return {text : "```"+response+"```"};

  } else if (userMessage.indexOf('pings') > -1) {

      var res = userMessage.split(" ");
      var ips = res[1];
      //var api_url = 'https://isvbscriptdead.com/api/ping/?host=8.8.4.4';
      var api_url = 'https://api.justyy.workers.dev/api/ping/?host='+ips;
      var response = UrlFetchApp.fetch(api_url); 
      var responseText = response.getContentText(); // Get the response text 
      const obj = JSON.parse(responseText);
      var content = JSON.stringify(obj.split("\n")); 
      return {text : "```"+content.replace(/,/g, '\n')+"```"};

  } else if (userMessage.indexOf('tracert') > -1) {

      var res = userMessage.split(" ");
      var ips = res[1];
 
      return {text : responseText};    

  } else if (userMessage.indexOf('whois') > -1) {

      var res = userMessage.split(" ");
      var ips = res[1];
      var api_url = 'https://dnsviz.net/d/'+ips+'/analyze/';
      return {text : "View Visual DNS :: "+api_url};

  } /**else if (userMessage.indexOf('box') > -1) {

      var res = userMessage.split(" ");
      var box = res[1];
      var api_url = 'http://provo.hostgator.com/hostinfo/index.php?&search=box2430';
      var response = UrlFetchApp.fetch(api_url).innerHTML; // Fetch the reponse from API
      var responseText = response.getContentText(); // Get the response text  
      //const obj = JSON.parse(responseText);
      //var content =JSON.stringify(responseText);
      return {text : response};

  } */else if (userMessage.indexOf('nslookup') > -1) {

      var res = userMessage.split(" ");
      var hosts = res[1];
      var type = res[2];
	    switch (type) {
        case 'A':
          var api_url = 'https://dns.google.com/resolve?name='+hosts;
          break;
        case 'NS':
          var api_url = 'https://dns.google.com/resolve?name='+hosts+'&type=NS';
          break;
        case 'CNAME':
          var api_url = 'https://dns.google.com/resolve?name='+hosts+'&type=CNAME';
          break;         
        case 'MX':
          var api_url = 'https://dns.google.com/resolve?name='+hosts+'&type=MX';
          break;
        case 'TXT':
          var api_url = 'https://dns.google.com/resolve?name='+hosts+'&type=TXT';
          break;
        default:
          var api_url = 'https://dns.google.com/resolve?name='+hosts+'&type=ALL';
          break;
      }
      var response = UrlFetchApp.fetch(api_url); // Fetch the reponse from API
      var responseText = response.getContentText(); // Get the response text 
      const obj = JSON.parse(responseText);
      var content = JSON.stringify(obj.Answer);
      return {text : "DNS Record [ "+type+" -- "+hosts+" ]\n"+"```"+content+"```\n"}; 

  } else if (userMessage.indexOf('quote') > -1 || userMessage.indexOf('Quote') > -1) {

      var api_url = 'https://api.quotable.io/random';
      var response = UrlFetchApp.fetch(api_url); 
      var responseText = response.getContentText(); // Get the response text 
      const obj = JSON.parse(responseText);
      var content = JSON.stringify(obj.content);       
      return {text : "\n*_"+content+"_*\n\nGood Day Dear !! 😇🤞🏻😍"}; 

  } else if (userMessage.indexOf('time') > -1 || userMessage.indexOf('Time') > -1 || userMessage.indexOf('TIME') > -1) {

      /**var api_url1 = 'http://worldtimeapi.org/api/timezone/MST';
        var response1 = UrlFetchApp.fetch(api_url1).getContentText();
        const obj1 = JSON.parse(response1); 
        var content1 = JSON.stringify(obj1.abbreviation +"  "+ obj1.datetime.split("T") +"  utc_offset");
      var api_url2 = 'http://worldtimeapi.org/api/timezone/America/Chicago';
        var response2 = UrlFetchApp.fetch(api_url2).getContentText();
        const obj2 = JSON.parse(response2);
        var content2 = JSON.stringify(obj2.abbreviation +"  "+ obj2.datetime.split("T") +"  utc_offset");
      var api_url3 = 'http://worldtimeapi.org/api/timezone/Asia/Kolkata';
        var response3 = UrlFetchApp.fetch(api_url3).getContentText();
        const obj3 = JSON.parse(response3);
        var content3 = JSON.stringify(obj3.abbreviation +"  "+ obj3.datetime.split("T") +"  utc_offset");

      return {text : "*Date-Time Check*\n```" + content1 +"\n"+ content2 +"\n"+ content3 + "```" }; */
       
      var api_url1 = 'https://api.ipgeolocation.io/timezone?apiKey=20f6a6532d5c491db83a7df5c681880e&tz=PST';
        var response1 = UrlFetchApp.fetch(api_url1).getContentText();
        const obj1 = JSON.parse(response1);
        var content1 = JSON.stringify("PST : "+ obj1.date +"  "+ obj1.time_12+" Unicode("+obj1.date_time_wti+")");
      var api_url2 = 'https://api.ipgeolocation.io/timezone?apiKey=20f6a6532d5c491db83a7df5c681880e&tz=EST';
        var response2 = UrlFetchApp.fetch(api_url2).getContentText();
        const obj2 = JSON.parse(response2);
        var content2 = JSON.stringify("EST : "+ obj2.date +"  "+ obj2.time_12+" Unicode("+obj2.date_time_wti+")");
      var api_url3 = 'https://api.ipgeolocation.io/timezone?apiKey=20f6a6532d5c491db83a7df5c681880e&tz=IST';
        var response3 = UrlFetchApp.fetch(api_url3).getContentText();
        const obj3 = JSON.parse(response3);
        var content3 = JSON.stringify("IST : "+ obj3.date +"  "+ obj3.time_12+" Unicode("+obj3.date_time_wti+")");
      var api_url4 = 'https://api.ipgeolocation.io/timezone?apiKey=20f6a6532d5c491db83a7df5c681880e&tz=UTC';
        var response4 = UrlFetchApp.fetch(api_url4).getContentText();
        const obj4 = JSON.parse(response4);
        var content4 = JSON.stringify("UTC : "+ obj4.date +"  "+ obj4.time_12+" Unicode("+obj4.date_time_wti+")");

      return {text : "*Date-Time Check*\n```" + content1 +"\n"+ content2 +"\n"+ content3 +"\n\n"+content4+"```" };   


  } else if (userMessage.indexOf('Hello') > -1 || userMessage.indexOf('hello') > -1 || userMessage.indexOf('HELLO') > -1) {

      //return {text : "Hola!, I’ll be happy to assist you right away! Pleases see available option using `@diya-EMC help`"};
      var cardSection = CardService.newCardSection();
      // Finish building the card section ...

      var card = CardService.newCardBuilder()
        .setName("Card name")
        .setHeader(CardService.newCardHeader().setTitle("Card title"))
        .addSection(cardSection)
        .build();

      return card;     

  } else {

      return {text: "<users/103082806510401892239> \n\nThis For Your Attention :: \"" + userMessage + "\"\n" }
  }
}

/**
 * Responds to a CARD_CLICKED event triggered in Hangouts Chat.
 * @param {object} event the event object from Hangouts Chat
 * @return {object} JSON-formatted response
 * @see https://developers.google.com/hangouts/chat/reference/message-formats/events
 * Functions with event driven actions
 */
function onCardClick(event) {
	console.info(event);
  //var reason = event.action.parameters[0].value;
	var message = '';
  if (event.action.actionMethodName == 'checkl1') {

      /**
      * @Custom code google_services status page JSONP
      */

    function parseDashboardJSONP(){ //Get the JSON values from JSONP to be easily parsed in the other functions
      var jsonData = "https://www.google.com/appsstatus/json/en"
      var jsonFile = UrlFetchApp.fetch(jsonData).getContentText();
      var text = jsonFile.replace("dashboard.jsonp(","");
      return text.replace(");","");
    }

    function getServicesData(){ //Get all current services and their IDs from the JSONP link
      var containerData = [];
      var parsethedata = JSON.parse(parseDashboardJSONP()); //Parse the JSON value
      try{
          for(var x = 0; x=>0; x++){
          var getServiceName = parsethedata.services[x].name; //Parse the service names from the JSON values
          var getServiceID = parsethedata.services[x].id; //Parse the service id from the JSON values
          containerData[getServiceID] = getServiceName; //Put all parse data into an array
        }
      }catch(e){
          //Logger.log("End of the line");
      }
      return containerData;
    }

    function getStatusOfServices(){ //Get all service names that were down
      var containerStatus = [];
      var parsethedata = JSON.parse(parseDashboardJSONP()); //Parse the JSON value
      try{
        for(var x = 0; x=>0; x++){
          var getID = parsethedata.messages[x].service; //Get the service ID from the "messages" node of the JSON value
          containerStatus[x] = getServicesData()[getID]; //Get the name of the service from "services" node that matches with the service ID from "messages" node
        }
      }catch(e){
        //Logger.log("End of the line");
    }
      return containerStatus;
    }

    function countAllServices(){ //Count all services from the "services" node of the JSON data
      var count = 0;
      for(var x=0; x<getServicesData().length;x++){
        if(getServicesData()[x]!=null){
        count++;
      }
    }
      return count;
    }

    function countDownServices(array) { //Remove the duplicate services that are on the "messages" node of the JSON data and count all of the down services unique names
      var outArray = [];
      array.sort(lowerCase);
      function lowerCase(a,b){
        return a.toLowerCase()>b.toLowerCase() ? 1 : -1;// sort function that does not "see" letter case
      }
      outArray.push(array[0]);
      for(var n in array){
        if(outArray[outArray.length-1].toLowerCase()!=array[n].toLowerCase()){
          outArray.push(array[n]);
        }
      }
      return outArray;
    }
    if(countDownServices(getStatusOfServices()).length == 0) {
      status = "Google Service(s)\t: All Systems Operational 🟢\n";
    }
    else {
    status = "Google Service(s)\t: Service Interruption(s) 🟠\n";
    };

    var response2 = UrlFetchApp.fetch('https://www.opensrsstatus.com/api/v2/status.json'); // Fetch the reponse from API
    var responseText2 = response2.getContentText(); // Get the response text 
    const obj2 = JSON.parse(responseText2);
    var content2 = JSON.stringify(obj2.status);
    var obj22= JSON.parse(content2);
    var content22 = JSON.stringify(obj22.description);
    var str2 = content22.replace(/"/g,"");
    var str22 = "All Systems Operational";
    var n = str2.localeCompare(str22);
    if(n == 0){
      status2 = "OpenSRS Service(s)\t: " + content22.replace(/"/g,"") + " 🟢\n";
    }
    else {
      status2 = "OpenSRS Service(s)\t: Service Interruption(s) 🟠\n";
    };

    var response3 = UrlFetchApp.fetch('https://status.atlassian.com/api/v2/status.json'); // Fetch the reponse from API
    var responseText3 = response3.getContentText(); // Get the response text 
    const obj3 = JSON.parse(responseText3);
    var content3 = JSON.stringify(obj3.status);
    var obj33= JSON.parse(content3);
    var content33 = JSON.stringify(obj33.description);
    var str3 = content33.replace(/"/g,"");
    var str33 = "All Systems Operational";
    var n = str3.localeCompare(str33);
    if(n == 0){
      status3 = "Jira Service(s)\t\t: " + content33.replace(/"/g,"") + " 🟢\n";
    }
    else {
      status3 = "Jira Service(s)\t\t: Service Interruption(s) 🟠\n";
    };

    message = "```"+status + status2 + status3+"```Check on eigi.statuspage.io";
        //message = "\n"+content2+"\n"+content3+"\n"+'Google Services : https://www.google.com/appsstatus/json/en \nOpenSRS : https://www.opensrsstatus.com/api/v2/status.json \nAtlassian/Jira : https://status.atlassian.com/api/v2/status.json\n';
		//message = "This For Attention :: \"" + userMessage + "\" <users/103082806510401892239>" ;

	} else if (event.action.actionMethodName == 'report') {
		message = 'test_report';
	} else if (event.action.actionMethodName == '') {
		message = '';
	} else if (event.action.actionMethodName == '') {
		message = '';
	} else {
		message = "I'm sorry; 😔";
	}
	return {
		text: message
	};
}

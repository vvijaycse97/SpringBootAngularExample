package com.example.controller;

import javax.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import java.io.IOException;
import com.example.util.ConstantsUtil;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
@RestController
public class MyController {

	private static final Logger LOG = LoggerFactory.getLogger(MyController.class);		
	@RequestMapping(value="/getResponseCode", method=RequestMethod.GET)
	public int getResponseCode(Model model, HttpSession session)
	throws IOException, InvalidFormatException {	
		LOG.info("getResponseCode()");		 			
		String githubhealthCheck = ConstantsUtil.GITHUB_HEALTH_CHECK;	
		int statusCode=0;	
		LOG.info("before try block");
		try {		
			URL obj = null;
			URLConnection conn = null;
			obj = new URL(githubhealthCheck);
			conn = obj.openConnection();
			List<String> responseCode=new ArrayList<String>();
			//get all headers
			Map<String, List<String>> map = conn.getHeaderFields();
			for (Map.Entry<String, List<String>> entry : map.entrySet()) {										
				responseCode.addAll(entry.getValue());					
			}
			Optional<String>responseCodeVal=responseCode.stream().findFirst();
			if(responseCodeVal.isPresent())
			{
				String val=responseCodeVal.get().toString();
				statusCode=Integer.valueOf(val.substring(9, 12));
			}						
		 return statusCode;
		} catch (Exception e) {
			LOG.info("In catch block");
			LOG.info("Exception occurred "+e.getMessage());			
		}		
		return statusCode;
	}
}

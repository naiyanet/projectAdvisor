/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package th.co.geniustree.intenship.advisor.controller;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import th.co.geniustree.intenship.advisor.model.Information;
import th.co.geniustree.intenship.advisor.model.SearchData;
import th.co.geniustree.intenship.advisor.repo.InformationRepo;
import th.co.geniustree.intenship.advisor.service.InformationSearchService;

/**
 *
 * @author User
 */
@RestController
public class InformationController {

    @Autowired
    private InformationRepo informationRepo;
    
    @Autowired
    private InformationSearchService informationSearchService;
    
    
    @RequestMapping(value = "/getinformation", method = RequestMethod.GET)
    public Page<Information> getInformation(Pageable pageable) {
        return informationRepo.findAll(pageable);
    }
    
    @RequestMapping(value = "/saveinformation",method = RequestMethod.POST)
    public void saveInformation(@Validated @RequestBody Information information){
        informationRepo.save(information);
    }
    
    @RequestMapping(value = "/deleteinformation",method = RequestMethod.POST)
    public void deleteInformation(@RequestBody Information information){
        informationRepo.delete(information);
    }
    
    @RequestMapping(value = "/searchinformation",method = RequestMethod.POST)
    private Page<Information> searchInformation(SearchData searchData,Pageable pageable)throws ParseException{
        String keyword = searchData.getKeyWord();
        String searchBy = searchData.getSearchBy();
        
        Page<Information> informations = null;
        if("title".equals(searchBy)){
            informations = informationSearchService.searchByTitle(keyword, pageable);
        }
        if("startTime".equals(searchBy)){
            DateFormat sim = new SimpleDateFormat("yyyy-MM-dd",Locale.US);
            Date date = sim.parse(keyword);
            informations = informationSearchService.searchByStartTime(date, date, pageable);
        }
        return informations;
    }
}

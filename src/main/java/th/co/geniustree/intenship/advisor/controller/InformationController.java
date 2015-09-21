/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package th.co.geniustree.intenship.advisor.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import th.co.geniustree.intenship.advisor.model.Information;
import th.co.geniustree.intenship.advisor.repo.InformationRepo;

/**
 *
 * @author User
 */
@RestController
public class InformationController {

    @Autowired
    private InformationRepo informationRepo;

    @RequestMapping(value = "/getinformation", method = RequestMethod.GET)
    public Page<Information> getInformation(Pageable pageable) {
        return informationRepo.findAll(pageable);
    }
    
    @RequestMapping(value = "/saveinformation",method = RequestMethod.POST)
    public void saveInformation(@Validated @RequestBody Information information){
        informationRepo.save(information);
    }
    
    @RequestMapping(value = "/deleteformation",method = RequestMethod.POST)
    public void deleteInformation(@RequestBody Information information){
        informationRepo.delete(information);
    }
}

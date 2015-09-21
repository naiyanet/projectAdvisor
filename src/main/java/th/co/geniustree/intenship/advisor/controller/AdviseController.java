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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import th.co.geniustree.intenship.advisor.model.Advise;
import th.co.geniustree.intenship.advisor.repo.AdviseRepo;

/**
 *
 * @author User
 */
@RestController
public class AdviseController {
    @Autowired
    private AdviseRepo adviseRepo;
    
    @RequestMapping(value = "/getadvise",method = RequestMethod.GET)
    public Page<Advise> getAdvise(Pageable pageable){
        return adviseRepo.findAll(pageable);
    }
    
    @RequestMapping(value = "/saveadvise" , method = RequestMethod.POST)
    public void saveAdvise(@Validated Advise advise){
        adviseRepo.save(advise);
    }
    
    @RequestMapping(value = "/deleteadvise",method = RequestMethod.POST)
    public void deleteAdvise(Advise advise){
        adviseRepo.delete(advise);
    }
}

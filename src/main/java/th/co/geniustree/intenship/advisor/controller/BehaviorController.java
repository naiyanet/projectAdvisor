/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package th.co.geniustree.intenship.advisor.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import th.co.geniustree.intenship.advisor.model.Behavior;
import th.co.geniustree.intenship.advisor.repo.BehaviorRepo;

/**
 *
 * @author User
 */
@RestController
public class BehaviorController {
    @Autowired
    private BehaviorRepo behaviorRepo;
    
    @RequestMapping(value = "/getbehavior",method = RequestMethod.GET)
    public Page<Behavior> getBehavior (Pageable pageable){
        return behaviorRepo.findAll(pageable);
    }
    
    @RequestMapping(value = "/savebehavior",method = RequestMethod.POST)
    public void saveBehavior (@RequestBody Behavior behavior){
        behaviorRepo.save(behavior);
    }
    
    @RequestMapping(value = "/deletebehavior",method = RequestMethod.POST)
    public void deleteBehavior (@RequestBody Behavior behavior){
        behaviorRepo.delete(behavior.getId());
    }
}

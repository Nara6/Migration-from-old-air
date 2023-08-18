package itc.gic.edu.TP16.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class TP16Controller {
    @GetMapping("/tp16/task1")
    public String index(){
        return "<h1>Hello</h1>";
    }
    @GetMapping("/tp16/task2")
    public ModelAndView task2(){
        // return new ModelAndView("task2");
        ModelAndView MaV = new ModelAndView("task2");
        MaV.addObject("username", "nara");
        MaV.addObject("password", "123456");

    
        return MaV;
    }
    
}

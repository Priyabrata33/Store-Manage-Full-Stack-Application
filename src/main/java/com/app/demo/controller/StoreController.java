package com.app.demo.controller;


import com.app.demo.models.Store;
import com.app.demo.models.StoreNameAdd;
import com.app.demo.service.StoreService;
import com.app.demo.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/stores")
@CrossOrigin(origins = "*")
public class StoreController {

//   field injection
    public StoreService storeService;

//    its always recommend to use construction injection instead of field injection Now  days we need all that a
//    construction with all the bean we need for our controller its ok not to use the @autowired
    @Autowired
    public StoreController(StoreService storeService){
        this.storeService = storeService;
    }
    @GetMapping("/storeDetails")
    public Store getStores(){
        Store st = new Store();
        st.setsId(100L);
        st.setsName("Buna");
        st.setmSale(1000L);
        st.setdSale(10L);
        st.settSale(1000L);
        return st;
    }


    @PostMapping("/saveStores")
    public Store saveStore(@RequestBody Store store){
        System.out.println(store.getsAddrs()+" "+store.getsName());

        storeService.insertStore(store);
        return store;
    }

    @GetMapping(path="/getAllStore", produces="application/json")
    public List<Store> getAllAddressAndName()
    {
        return storeService.getStore();
    }
}

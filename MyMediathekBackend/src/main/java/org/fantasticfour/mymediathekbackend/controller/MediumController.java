package org.fantasticfour.mymediathekbackend.controller;

import org.fantasticfour.mymediathekbackend.entities.Medium;
import org.fantasticfour.mymediathekbackend.entities.Type;
import org.fantasticfour.mymediathekbackend.services.MediumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static org.springframework.http.ResponseEntity.badRequest;
import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("/api/medium")
@CrossOrigin(origins = "http://localhost:4200/")
public class MediumController {

    private MediumService mediumService;

    @Autowired
    public MediumController(MediumService mediumService) {
        this.mediumService = mediumService;
    }


    @GetMapping()
    public ResponseEntity<List<Medium>>getallMedien(){
        List<Medium> mediumList = mediumService.getallMedien();
        return ResponseEntity.ok(mediumList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Medium> getMediumById(@PathVariable Long id){
        Optional<Medium> selectedMed = mediumService.getMediumById(id);
        return selectedMed.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping()
    public ResponseEntity<Medium>createMedium(@RequestBody @Validated Medium newMedium){
        if (newMedium.getId()==null){
        return ResponseEntity.ok(mediumService.createMedium(newMedium));}
        else{
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity <Void> deleteById(@PathVariable Long id) {
        if (mediumService.getMediumById(id).isPresent()) {
            mediumService.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping
    public ResponseEntity<Medium> updateTyp(@RequestBody Medium newMedium){
        if(newMedium.getId()==null){
            return badRequest().build();
        }
        return ok(mediumService.updateMedium(newMedium));
    }

    @GetMapping("/type/{id}")
    public ResponseEntity<List<Medium>> getMediumByTypeId(@PathVariable Long id){
        return ok(mediumService.getMediumByTypeId(id));
    }
}



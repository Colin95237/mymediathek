package org.fantasticfour.mymediathekbackend.controller;

import lombok.AllArgsConstructor;
import org.fantasticfour.mymediathekbackend.entities.Type;
import org.fantasticfour.mymediathekbackend.services.TypeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.ResponseEntity.badRequest;
import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("/api/type")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class TypeController {

    private final TypeService typeService;

    @GetMapping
    public ResponseEntity<List<Type>> getAllTypes(){
        return ok(typeService.getAllTypes());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Type> getTypeById(@PathVariable Long id){
        return typeService.getTypeById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

   @PostMapping
    public ResponseEntity <Type> createType(@RequestBody Type newType){
        if(newType.getId() != null) {
            return badRequest().build();
        }
        return ok(typeService.createType(newType));
   }

   @PutMapping
    public ResponseEntity<Type> updateType(@RequestBody Type type){
        if(type.getId()==null){
            return badRequest().build();
        }
        return ok(typeService.updateType(type));
   }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteType(@PathVariable Long id){
        if (typeService.getTypeById(id).isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        typeService.deleteType(id);
        return ResponseEntity.ok().build();
    }
}

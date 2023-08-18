package net.camalpha.learn.articlemanagement.model.user.form;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * User Create Form
 * @author tang.leanghour
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserCreateForm {

    private String name;
    private String sex;
    private LocalDateTime dateOfBirth;
    private String phone;
    private String address;
}

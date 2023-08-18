package net.camalpha.learn.articlemanagement.model.user.view;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * User Detail View
 * @author tang.leanghour
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserDetailView {

    private Integer id;
    private String name;
    private String sex;
    private String dateOfBirth;
    private String phone;
    private String address;
}

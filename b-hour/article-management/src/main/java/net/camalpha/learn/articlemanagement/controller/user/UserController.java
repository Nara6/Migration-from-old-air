package net.camalpha.learn.articlemanagement.controller.user;

import java.util.ArrayList;
import net.camalpha.learn.articlemanagement.model.user.form.UserCreateForm;
import net.camalpha.learn.articlemanagement.model.user.form.UserUpdateForm;
import net.camalpha.learn.articlemanagement.model.user.view.UserDetailView;
import net.camalpha.learn.articlemanagement.model.user.view.UserListView;
import net.camalpha.learn.articlemanagement.service.user.UserService;
import net.camalpha.learn.articlemanagement.shared.model.response.DataResponse;
import net.camalpha.learn.articlemanagement.shared.model.response.PageResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

/**
 * User Controller
 * 
 * @author tang.leanghour
 */
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public PageResponse<UserListView> list(@RequestParam(name = "limit", defaultValue = "10") Integer limit,
            @RequestParam(name = "offset", defaultValue = "0") Integer offset,
            @RequestParam(name = "query", defaultValue = "") String query) {
        return this.userService.list(query, limit, offset);
    }

    @PostMapping
    public DataResponse<UserDetailView> create(@RequestBody UserCreateForm form) {
        return this.userService.create(form);
    }

    @GetMapping("/{id}")
    public DataResponse<UserDetailView> get(@PathVariable("id") Integer id) {
        return this.userService.get(id);
    }

    @PatchMapping("/{id}")
    public DataResponse<UserDetailView> update(@PathVariable("id") Integer id, @RequestBody UserUpdateForm form) {
        return this.userService.update(id, form);
    }

    @DeleteMapping("/{id}")
    public DataResponse<UserDetailView> delete(@PathVariable("id") Integer id) {
        return this.userService.delete(id);
    }
}

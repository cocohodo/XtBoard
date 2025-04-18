package Xt.Information.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class XtBoardController {
    @GetMapping("/")
    public String index(Model model) {

        return "index"; // templates/index.html 로 연결
    }

    @GetMapping("/chdis")
    public String chdis(Model model) {

        return "chdis";
    }
}

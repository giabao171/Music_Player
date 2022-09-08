function Validator(option) {

    //Fix lỗi lấy parent element của inputElement


    //const formGroup = inputElement.closest(options.formGroupSelector);
    //hàm closet tìm đến selector có tên class / id gần nhất 
    //(có thể thay thế cho hàm get parent)

    function getParent(element, selector) {
        while(element) {
            if(element.parentElement) {
                if (element.parentElement.matches(selector))
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var selectorRules = {}

    //2. show thực hiện validate
    function validate(inputElement, rule) {
        var errorElement = getParent(inputElement, option.formGroupSelector).querySelector(option.errorSelector);
        // var errorMessage = rule.test(inputElement.value);
        var errorMessage;
        
        var rules = selectorRules[rule.selector]
        // console.log(rules)

        // lặp qua từng rule(các text để kiểm tra)
        //nếu có error Mess thì dừng lại
        for (var i = 0; i < rules.length; ++i) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector+':checked')
                    )
                    break;
                default:
                    errorMessage = rules[i](inputElement.value) //tương tự dòng 8 nên xem lại
            }
            
            if (errorMessage) break;
        }
        
            if (errorMessage) {
                errorElement.innerText = errorMessage;
                getParent(inputElement, option.formGroupSelector).classList.add("invalid")
            }
            else {
                errorElement.innerText = '';
                getParent(inputElement, option.formGroupSelector).classList.remove("invalid")
            }

        
        return !errorMessage;
    }
    //1. lấy element của form
    var formElement = document.querySelector(option.form);
    if (formElement) {

        //khi submit form
        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFormValid = true;

            option.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                console.log(validate(inputElement, rule));

                if (!isValid) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
               if (typeof option.onSubmit === 'function') {
                var enableInputs = formElement.querySelectorAll('[name]');
                var formValues = Array.from(enableInputs)
                    .reduce(function (values, input) {

                        switch(input.type) {
                            case 'radio':
                                if (input.matches(':checked')) {
                                 values[input.name] = input.value;
                                }
                                break;
                            case 'checkbox':
                                // if (input.matches(':checked')) {
                                    
                                    if (!Array.isArray(values[input.name])) {
                                    //    values[input.name].push(input.value);
                                    values[input.name] = [];
                                    }
                                    if (input.matches(':checked')) {
                                        values[input.name].push(input.value);
                                    }
                                    // else {
                                    //     values[input.name].push(input.value)
                                    // }
                                // }
                                //values[input.name].push(input.value);
                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value;
                        }

                        //values[input.name] = input.value;
                        return  values;
                    }, {})

                    option.onSubmit(formValues);
               }

            }
        }

        // lặp qua mỗi rule và lắng nghe sự kiện(blur, input,...)
        option.rules.forEach(function (rule) {

            // lưu lại các rule cho mỗi input
            // các rule (text) dạng function đc lưu vào object selectorRules
            // với key là các rule.selector (id của input)

            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            }
            else {
                selectorRules[rule.selector] = [rule.test];
            }


            var inputElements = formElement.querySelectorAll(rule.selector);
            // console.log(rule)
            //console.log(selectorRules)

            inputElements.forEach(function(inputElement) {
                if(inputElement) {
                    // xử lý error blur ra khỏi input 
                    inputElement.onblur = function () {
                        validate(inputElement, rule);
                        // console.log(rule)
                    }
    
                    //3. xử lý mỗi khi người dùng nhập vào input
                    inputElement.oninput = function () {
                        var errorElement = getParent(inputElement, option.formGroupSelector).querySelector(".form-message");
                        errorElement.innerText = '';
                        getParent(inputElement, option.formGroupSelector).classList.remove("invalid");
                    }
                }
            })
        });
    }

    // console.log(selectorRules)
    
}


//Định nghĩa rules
//Nguyên tắc của các rule
//1. khi có lỗi trả ra mes lỗi
//2. khi hợp lệ ko trả ra gì cả
Validator.isRequired = function(selector) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : "Vui long nhap truong nay";
        }
    }
}

Validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : "Vui long nhap Email";
        }
    }
}

Validator.minLength = function(selector, minLength) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= minLength ? undefined : `Vui long nhap hon ${minLength} ky tu`;
        }
    }
}

Validator.isConfirmed = function(selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || "Gia tri nhap vao khong chinh xac";
        }
    }
}
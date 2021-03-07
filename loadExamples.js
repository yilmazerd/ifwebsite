    function loadExample(){
      var exampleOneCode = '';
exampleOneCode+= 'package examples;\n'
exampleOneCode+= '/*\n'
exampleOneCode+= 'Example\n' 
exampleOneCode+= 'Returns a very simple JSON structure and 200 HTTP code\n'
exampleOneCode+= "Follow this example. Do not log or stdout, if you'd like to use the custom http code and json.\n"
exampleOneCode+= '*/\n'
exampleOneCode+= 'public class DemoClass{\n'
exampleOneCode+= 'public static void main(String[] args) {\n'
exampleOneCode+= 'Person person = new Person("Thomas","Edison");\n'
exampleOneCode+= 'InstantFunctionResponse.responseBuilder(200,person.toString());\n'
exampleOneCode+= '}\n'
exampleOneCode+= '}\n'

exampleOneCode+= 'class Person {\n'
exampleOneCode+= '    String firstName;\n'
exampleOneCode+= '    String lastName;\n'

exampleOneCode+= '    Person (String firstName, String lastName) {\n'
exampleOneCode+= '            this.firstName = firstName;\n'
exampleOneCode+= '            this.lastName = lastName;\n'
exampleOneCode+= '        }\n'

exampleOneCode+= '        @Override\n'
exampleOneCode+= '        public String toString() {\n'
exampleOneCode+= '            return "{ \\"firstName\\" : "+firstName+", \\"lastName\\" : "+lastName+" }";\n'
exampleOneCode+= '        }\n'
exampleOneCode+= '    }\n'

exampleOneCode+= '    class InstantFunctionResponse {\n'
exampleOneCode+= '        public static void responseBuilder(int httpStatusCode, String responseObject) {\n'
exampleOneCode+= '            System.out.println("httpStatusCode:"+httpStatusCode);\n'
exampleOneCode+= '            System.out.println("responseObject:"+responseObject);\n'
exampleOneCode+= '        }\n'

exampleOneCode+= '        public static void responseBuilder(String responseObject) {\n'
exampleOneCode+= '            responseBuilder(200, responseObject);\n'
exampleOneCode+= '        }\n'

exampleOneCode+= '    }\n'

$("#codeBlockArea").empty().append(exampleOneCode);

    }
<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_before.php");

$result = array();

// echo '<pre>';
// print_r($_REQUEST);
// echo '</pre>';

foreach ($_REQUEST['required'] as $key => $value) {

  if($value == '') {
    $result['error'][$key] = 'Это обязательное поле';
  };

};

if (empty($_REQUEST['required']['check1']) && empty($_REQUEST['required']['check2']) && empty($_REQUEST['required']['check3'])) {
  $result['error']['check1'] = 'Выберите мероприятие';
  $result['error']['check2'] = 'Выберите мероприятие';
  $result['error']['check3'] = 'Выберите мероприятие';
}

$check1 = empty($_REQUEST['required']['check1']) ? '-' : '+';
$check2 = empty($_REQUEST['required']['check2']) ? '-' : '+';
$check3 = empty($_REQUEST['required']['check3']) ? '-' : '+';

if(empty($result["error"])){

  if(CModule::IncludeModule('iblock')){
    $el = new CIBlockElement;
    $arLoadProductArray = Array(
      "IBLOCK_ID" => 87,
      "PROPERTY_VALUES"=> array(
        'CHECK1' => $check1,
        'CHECK2' => $check2,
        'CHECK3' => $check3,
        'FIO' => $_REQUEST['required']['FIO'],
        'CITY' => $_REQUEST['required']['city'],
        'PHONE' => $_REQUEST['required']['phone'],
        'APPOINTMENT' => $_REQUEST['required']['appointment'],
        'DEALER' => $_REQUEST['required']['dealer']
      ),
      "NAME" => 'Дни Isuzu в г. Ульяновск"' //название элемента
  );

  $el->Add($arLoadProductArray);
}

$message .=  "Конференция по послепродажному обслуживанию: " . $check1 . "<br>";
$message .=  "Конференция по маркетингу и продажам:	" . $check2 . "<br>";
$message .=  "Сравнительный тренинг D-Max с конкурентами: " . $check3 . "<br>";
$message .=  "ФИО: " . $_REQUEST['required']['FIO'] . "<br>";
$message .=  "Город: " . $_REQUEST['required']['city'] . "<br>";
$message .=  "Контактный телефон: " . $_REQUEST['required']['phone'] . "<br>";
$message .=  "Должность: " . $_REQUEST["required"]['appointment'] . "<br>";
$message .=  "Название дилерского центра: " . $_REQUEST['required']['dealer'] . "<br>";

$message = print_r($message, true);
$toEmail = 'anna.titova@isuzu.ru, evgenia.bolnokina@isuzu.ru';
// $toEmail = 'a.karamushko@supportix.ru, e.lomova@supportix.ru';
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=utf-8';
$headers[] = 'From: noreply@isuzu.ru';

  if(!mail($toEmail, 'Заявка с формы "Анкета"', $message, implode("\r\n", $headers))){
    $arResult["error"]["form"] = "Ошибка отправки письма.";
  };

};



echo json_encode($result);